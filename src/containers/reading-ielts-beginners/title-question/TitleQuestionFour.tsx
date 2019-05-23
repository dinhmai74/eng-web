import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import firebase from '../../../firebase'

const Text = styled.div``

export interface IGeneralCourseState {
  titleQuestionFour: object
}

export default class TitleQuestionFour extends React.Component<
  any,
  IGeneralCourseState
> {
  state = {
    titleQuestionFour: {}
  }
  componentDidMount() {
    const questionRefFour = firebase
      .database()
      .ref('ielts_beginner/reading/questions/question_4/')
    questionRefFour.on('value', (snapshot) => {
      this.setState({
        titleQuestionFour: snapshot!.val()
      })
    })
  }
  render() {
    const titleQuestionFour: any = this.state.titleQuestionFour
    return <Text>{titleQuestionFour.titlequestion}</Text>
  }
}
