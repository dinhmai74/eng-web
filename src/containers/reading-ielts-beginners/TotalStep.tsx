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
import QuestionOne from './Question/QuestionOne'
import QuestionTwo from './Question/QuestionTwo'
import QuestionThree from './Question/QuestionThree'
import QuestionFour from './Question/QuestionFour'
import QuestionFive from './Question/QuestionFive'

export interface IGeneralCourseState {}

export default class TotalStep extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Wizard
        contentAlign="left"
        backButtonText="Prev"
        steps={[
          {
            name: '1. What does the butterfly egg become?',
            component: <QuestionOne />
          },
          {
            name: '2. What does a butterfly come out from?',
            component: <QuestionTwo />
          },
          {
            name: '3. What does the tadpole eat?',
            component: <QuestionThree />
          },
          {
            name: '4. Where does the tadpole live?',
            component: <QuestionFour />
          },
          {
            name: '5. What helps the seed grow?',
            component: <QuestionFive />
          }
        ]}
      />
    )
  }
}
