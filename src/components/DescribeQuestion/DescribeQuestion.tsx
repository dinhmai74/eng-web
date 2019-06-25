import * as React from 'react'
import styled from 'styled-components'

import FirebaseWorker from 'DataFirebase'
import { TQuestion } from 'containers/reading-ielts-beginners/Question/type'

const Text = styled.div``

interface IDescribeQuestionProps {
  questionNumber: number
  type: TQuestion
}

export default class DescribeQuestion extends React.Component<
  IDescribeQuestionProps,
  any
> {
  state = {
    describeQuestion: null
  }
  async componentDidMount() {
    this.fetchData(this.props)
  }

  async componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps)
  }

  fetchData = async (props) => {
    const { questionNumber, type } = props
    const describeQuestion = await FirebaseWorker.getDescribeQuestion(
      `question_${questionNumber}`,
      type
    )
    this.setState({
      describeQuestion
    })
  }

  render() {
    const describeQuestion: any = this.state.describeQuestion
    if (!describeQuestion) {
      return <div />
    }
    return <Text>{describeQuestion}</Text>
  }
}
