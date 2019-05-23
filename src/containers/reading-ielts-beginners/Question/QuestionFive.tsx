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

export default class QuestionFive extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <CustomCheckbox
          firstQuestion={'Wind and sun'}
          secondQuestion={'Sun and rain'}
          thirdQuestion={'Snow and sun'}
          lastQuestion={'Wind and rain'}
          correctAnswer={'Wind and sun'}
        />
      </Container>
    )
  }
}
