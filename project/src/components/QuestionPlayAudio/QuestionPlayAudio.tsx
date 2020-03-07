import * as React from 'react'
import styled from 'styled-components'

import PlayAudio from 'components/PlayAudio/PlayAudio'
import { TQuestion } from 'containers/reading-ielts-beginners/Question/type'
import FirebaseWorker from 'DataFirebase'

const Text = styled.div``

interface IDescribeQuestionProps {
  questionNumber: number
  type: TQuestion
}

export default class QuestionPlayAudio extends React.Component<
  IDescribeQuestionProps,
  any
> {
  state = {
    titleQuestionAudio: null
  }
  async componentDidMount() {
    this.fetchData(this.props)
  }

  async componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps)
  }

  fetchData = async (props) => {
    const { questionNumber, type } = props
    const titleQuestionAudio = await FirebaseWorker.getQuestionAudio(
      `question_${questionNumber}`,
      type
    )
    this.setState({
      titleQuestionAudio
    })
  }

  render() {
    const titleQuestionAudio: any = this.state.titleQuestionAudio
    const style = this.props

    if (!titleQuestionAudio) {
      return <div />
    }
    return <PlayAudio question={titleQuestionAudio} style={style} />
  }
}
