import * as React from 'react'
import { Container } from '@front10/landing-page-book/dist/components'
import { FirebaseWorker } from 'DataFirebase'
import {
  IQuestion,
  TQuestion
} from 'containers/reading-ielts-beginners/Question/type'
import TestResult from 'components/TestResult/TestResult'
import CheckboxAudio from 'components/CheckboxAudio/CheckboxAudio'
import { TLevel } from 'components/LevelIelts/Level'

export interface IQuestionState {
  question: IQuestion
}

interface IQuestionProps {
  questionNumber: number
  type: TQuestion
  level: TLevel
  images1: string
  images2: string
  images3: string
  url1: string
  url2: string
  url3: string
}

export default class QuestionAudio extends React.Component<
  IQuestionProps,
  IQuestionState
> {
  static defaultProps = {
    questionNumber: 1,
    type: 'reading',
    level: 'ielts_advanced',
    images1: '',
    images2: '',
    images3: '',
    url1: '',
    url2: '',
    url3: ''
  }
  state = {
    question: {
      a: '',
      b: '',
      c: '',
      d: ''
    }
  }

  async componentDidMount() {
    this.fetchData(this.props)
  }

  async componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps)
  }

  fetchData = async (props) => {
    const { questionNumber, type, level } = props
    const question = await FirebaseWorker.getQuestions(
      level,
      `question_${questionNumber}`,
      type
    )
    this.setState({
      question
    })
  }

  render() {
    const question: IQuestion = this.state.question

    const {
      questionNumber,
      type,
      images1,
      images2,
      images3,
      url1,
      url2,
      url3
    } = this.props
    if (questionNumber === 6 && String(type) === 'result') {
      return (
        <TestResult
          images1={images1}
          images2={images2}
          images3={images3}
          url1={url1}
          url2={url2}
          url3={url3}
        />
      )
    }
    if (!question) {
      return
    }
    return (
      <Container>
        <CheckboxAudio
          firstQuestion={question.a}
          secondQuestion={question.b}
          correctAnswer={question.a}
        />
      </Container>
    )
  }
}
