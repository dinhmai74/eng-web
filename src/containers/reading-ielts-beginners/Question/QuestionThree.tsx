import * as React from 'react'
import { Container } from '@front10/landing-page-book/dist/components'
import CustomCheckbox from 'components/Question/CustomCheckbox'
import FirebaseWorker from 'DataFirebase'
import { IQuestion } from './type'

export interface IGeneralCourseState {
  question: IQuestion
}

export default class QuestionThree extends React.Component<any, any> {
  state = {
    question: {}
  }

  async componentDidMount() {
    const question = await FirebaseWorker.getQuestions('question_3')
    this.setState({
      question
    })
  }
  render() {
    const question: any = this.state.question
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
