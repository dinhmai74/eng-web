import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import {
  Section,
  Container,
  Image,
  Wizard,
  Video,
  Gif,
  FormGroup,
  Input,
  Social
} from '@front10/landing-page-book/dist/components'
import CustomCheckbox from 'components/Question/CustomCheckbox'
import firebase from '../../../firebase'

export interface IGeneralCourseState {
  question: object
}

export default class QuestionThree extends React.Component<any, any> {
  state = {
    question: {}
  }

  componentDidMount() {
    const questionRef = firebase
      .database()
      .ref('ielts_beginner/reading/questions/question_3/answers')
    questionRef.on('value', (snapshot) => {
      this.setState({
        question: snapshot!.val()
      })
    })
  }
  render() {
    const question: any = this.state.question
    return (
      <Container>
        <CustomCheckbox
          firstQuestion={question.a}
          secondQuestion={question.b}
          thirdQuestion={question.c}
          lastQuestion={question.d}
          correctAnswer={question.a}
        />
      </Container>
    )
  }
}
