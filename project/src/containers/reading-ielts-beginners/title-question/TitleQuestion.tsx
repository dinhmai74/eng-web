import * as React from 'react'
import styled from 'styled-components'

import FirebaseWorker from 'DataFirebase'
import { TQuestion } from '../Question/type'
import { TLevel } from 'components/LevelIelts/Level'

const Text = styled.div`
  font-size: 22px!important;
  font-weight: bold;
  padding-left: 30px;
`

interface ITitleQuestionProps {
  questionNumber: number
  type: TQuestion
  level: TLevel
}

export default class TitleQuestion extends React.Component<any, any> {
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
    const { questionNumber, type, level } = props
    const titleQuestion = await FirebaseWorker.getTitleQuestions(
      level,
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
