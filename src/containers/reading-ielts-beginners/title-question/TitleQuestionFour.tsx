import * as React from 'react'
import styled from 'styled-components'

import FirebaseWorker from 'DataFirebase'

const Text = styled.div``

export default class TitleQuestionFour extends React.Component<any, any> {
  state = {
    titleQuestion: {}
  }
  async componentDidMount() {
    const titleQuestion = await FirebaseWorker.getTitleQuestions('question_4')
    this.setState({
      titleQuestion
    })
  }
  render() {
    const titleQuestionFour: any = this.state.titleQuestion
    return <Text>{titleQuestionFour.titlequestion}</Text>
  }
}
