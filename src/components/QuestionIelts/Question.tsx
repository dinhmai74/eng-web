import * as React from 'react'
import { Container } from '@front10/landing-page-book/dist/components'
import { FirebaseWorker } from 'DataFirebase'
import {
  IQuestion,
  TQuestion
} from 'containers/reading-ielts-beginners/Question/type'
import CustomCheckbox from 'components/Question/CustomCheckbox'
import TestResult from 'components/TestResult/TestResult'

export interface IQuestionState {
  question: IQuestion
}

interface IQuestionProps {
  questionNumber: number
  type: TQuestion
  images1: string
  images2: string
  images3: string
}

export default class Question extends React.Component<
  IQuestionProps,
  IQuestionState
> {
  static defaultProps = {
    questionNumber: 1,
    type: 'reading',
    images1: '',
    images2: '',
    images3: ''
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
    const { questionNumber, type } = props
    const question = await FirebaseWorker.getQuestions(
      `question_${questionNumber}`,
      type
    )
    this.setState({
      question
    })
  }

  render() {
    const question: IQuestion = this.state.question
    const { questionNumber, type, images1, images2, images3 } = this.props
    if (questionNumber === 6 && String(type) === 'result') {
      return (
        <TestResult images1={images1} images2={images2} images3={images3} />
      )
    }
    if (!question) {
      return
    }
    return (
      <Container>
        <CustomCheckbox
          firstQuestion={question.a}
          secondQuestion={question.b}
          thirdQuestion={question.c}
          lastQuestion={question.d}
          correctAnswer={question.a}
        />
      </Container>
    )
  }
}
