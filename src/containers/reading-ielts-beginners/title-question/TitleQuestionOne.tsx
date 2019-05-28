import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import firebase from '../../../firebase'

const Text = styled.div``

export interface IGeneralCourseState {
  titleQuestionOne: object
}

export default class TitleQuestionOne extends React.Component<
  any,
  IGeneralCourseState
> {
  state = {
    titleQuestionOne: {}
  }
  componentDidMount() {
    const questionRefOne = firebase
      .database()
      .ref('ielts_beginner/reading/questions/question_1/')
    questionRefOne.on('value', (snapshot) => {
      this.setState({
        titleQuestionOne: snapshot!.val()
      })
    })
  }
  render() {
    const titleQuestionOne: any = this.state.titleQuestionOne
    return <Text>{titleQuestionOne.titlequestion}</Text>
  }
}
