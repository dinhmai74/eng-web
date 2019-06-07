import * as React from 'react'
import styled from 'styled-components'

import FirebaseWorker from 'DataFirebase'

const Text = styled.div``

export default class TitleQuestionThree extends React.Component<any, any> {
  state = {
    titleQuestion: {}
  }
  async componentDidMount() {
    const titleQuestion = await FirebaseWorker.getTitleQuestions('question_3')
    this.setState({
      titleQuestion
    })
  }
  render() {
    const titleQuestionThree: any = this.state.titleQuestion
    return <Text>{titleQuestionThree.titlequestion}</Text>
  }
}
