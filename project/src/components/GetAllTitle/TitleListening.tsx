import * as React from 'react'
import styled from 'styled-components'

import { TQuestion } from 'containers/reading-ielts-beginners/Question/type'
import FirebaseWorker from 'DataFirebase'

const Text = styled.div``

interface ITitleQuestionProps {
  questionNumber: number
  type: TQuestion
}

export default class TitleListening extends React.Component<
  ITitleQuestionProps,
  any
> {
  state = {
    titleQuestion: null
  }
  async componentDidMount() {
    this.fetchData(this.props)
  }

  async componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps)
  }

  fetchData = async (props) => {
    const { questionNumber, type, title } = props
    const titleQuestion = await FirebaseWorker.getDescribeQuestion(
      `question_${questionNumber}`,
      type
    )
    this.setState({
      titleQuestion
    })
  }

  render() {
    const titleQuestion: any = this.state.titleQuestion
    if (!titleQuestion) {
      return <div />
    }
    return <Text>{titleQuestion}</Text>
  }
}
