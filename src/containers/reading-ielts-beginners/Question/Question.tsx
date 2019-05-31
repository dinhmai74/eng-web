import * as React from 'react'
import { Container } from '@front10/landing-page-book/dist/components'
import CustomCheckbox from 'components/Question/CustomCheckbox'
import { FirebaseWorker } from 'DataFirebase'
import { IQuestion, TQuestion } from './type'

export interface IQuestionState {
  question: IQuestion
}

interface IQuestionProps {
  questionNumber: number
  type: TQuestion
}

export default class Question extends React.Component<
  IQuestionProps,
  IQuestionState
> {
  static defaultProps = {
    questionNumber: 2,
    type: 'reading'
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

