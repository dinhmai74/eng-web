import * as React from 'react'
import styled from 'styled-components'

import FirebaseWorker from 'DataFirebase'
import { TQuestion } from '../Question/type'

const Text = styled.div``

interface ITitleQuestionProps {
  questionNumber: number
  type: TQuestion
}

export default class TitleQuestion extends React.Component<
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
    const { questionNumber } = props
    const titleQuestion = await FirebaseWorker.getTitleQuestions(
      `question_${questionNumber}`
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
