import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import firebase from '../../../firebase'

const Text = styled.div``

export interface IGeneralCourseState {
  titleQuestionThree: object
}

export default class TitleQuestionThree extends React.Component<
  any,
  IGeneralCourseState
> {
  state = {
    titleQuestionThree: {}
  }
  componentDidMount() {
    const questionRefThree = firebase
      .database()
      .ref('ielts_beginner/reading/questions/question_3/')
    questionRefThree.on('value', (snapshot) => {
      this.setState({
        titleQuestionThree: snapshot!.val()
      })
    })
  }
  render() {
    const titleQuestionThree: any = this.state.titleQuestionThree
    return <Text>{titleQuestionThree.titlequestion}</Text>
  }
}
