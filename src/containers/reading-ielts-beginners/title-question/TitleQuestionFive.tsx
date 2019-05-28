import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import firebase from '../../../firebase'

const Text = styled.div``

export interface IGeneralCourseState {
  titleQuestionFive: object
}

export default class TitleQuestionFive extends React.Component<
  any,
  IGeneralCourseState
> {
  state = {
    titleQuestionFive: {}
  }
  componentDidMount() {
    const questionRefFive = firebase
      .database()
      .ref('ielts_beginner/reading/questions/question_5/')
    questionRefFive.on('value', (snapshot) => {
      this.setState({
        titleQuestionFive: snapshot!.val()
      })
    })
  }
  render() {
    const titleQuestionFive: any = this.state.titleQuestionFive
    return <Text>{titleQuestionFive.titlequestion}</Text>
  }
}
