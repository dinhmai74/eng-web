import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import firebase from '../../../firebase'

const Text = styled.div``

export interface IGeneralCourseState {
  titleQuestionTwo: object
}

export default class TitleQuestionTwo extends React.Component<
  any,
  IGeneralCourseState
> {
  state = {
    titleQuestionTwo: {}
  }
  componentDidMount() {
    const questionRefTwo = firebase
      .database()
      .ref('ielts_beginner/reading/questions/question_2/')
    questionRefTwo.on('value', (snapshot) => {
      this.setState({
        titleQuestionTwo: snapshot!.val()
      })
    })
  }
  render() {
    const titleQuestionTwo: any = this.state.titleQuestionTwo
    return <Text>{titleQuestionTwo.titlequestion}</Text>
  }
}
