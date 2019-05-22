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

export interface IGeneralCourseState {}

export default class QuestionFour extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <CustomCheckbox
          // titleQuestion={'1. What does the butterfly egg become?'}
          firstQuestion={'On the tree'}
          secondQuestion={'In the water'}
          thirdQuestion={'On ice'}
          lastQuestion={'In the house'}
          correctAnswer={'On the tree'}
          // style={{marginLeft: '40px'}}
        />
      </Container>
    )
  }
}
