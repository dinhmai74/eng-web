import * as React from 'react'
import styled from 'styled-components'

import FirebaseWorker from 'DataFirebase'

const Text = styled.div``

export default class TitleQuestionOne extends React.Component<any, any> {
  state = {
    titleQuestion: {}
  }
  async componentDidMount() {
    const titleQuestion = await FirebaseWorker.getTitleQuestions('question_1')
    this.setState({
      titleQuestion
    })
  }
  render() {
    const titleQuestionOne: any = this.state.titleQuestion
    return <Text>{titleQuestionOne.titlequestion}</Text>
  }
}
