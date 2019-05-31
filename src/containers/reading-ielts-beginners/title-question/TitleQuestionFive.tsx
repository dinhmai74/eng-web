import * as React from 'react'
import styled from 'styled-components'

import FirebaseWorker from 'DataFirebase'

const Text = styled.div``

export default class TitleQuestionFive extends React.Component<any, any> {
  state = {
    titleQuestion: {}
  }
  async componentDidMount() {
    const titleQuestion = await FirebaseWorker.getTitleQuestions('question_5')
    this.setState({
      titleQuestion
    })
  }
  render() {
    const titleQuestionFive: any = this.state.titleQuestion
    return <Text>{titleQuestionFive.titlequestion}</Text>
  }
}
