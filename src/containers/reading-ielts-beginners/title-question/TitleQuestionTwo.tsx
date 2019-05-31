import * as React from 'react'
import styled from 'styled-components'

import FirebaseWorker from 'DataFirebase'

const Text = styled.div``

export default class TitleQuestionTwo extends React.Component<any, any> {
  state = {
    titleQuestion: {}
  }
  async componentDidMount() {
    const titleQuestion = await FirebaseWorker.getTitleQuestions('question_2')
    this.setState({
      titleQuestion
    })
  }
  render() {
    const titleQuestionTwo: any = this.state.titleQuestion
    return <Text>{titleQuestionTwo.titlequestion}</Text>
  }
}
