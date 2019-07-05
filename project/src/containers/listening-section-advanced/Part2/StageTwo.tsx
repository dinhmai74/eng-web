import * as React from 'react'
import _ from 'lodash'
import { images, colors } from 'themes'

import {
  Wizard,
  Section,
  Container
} from '@front10/landing-page-book/dist/components'
import TitleQuestion from 'containers/reading-ielts-beginners/title-question/TitleQuestion'
import stepsDataListening from '../stepsDataListening.json'
import Question from 'components/QuestionIelts/Question.tsx'
import styled from 'styled-components'
import AudioListening from 'components/AudioListening/AudioListening'
import { Table } from 'react-bootstrap'
import TableQuestion from 'components/TableQuestion/TableQuestion'
// import { Container } from '@material-ui/core'
const Border = styled.div`
  border-top: 3px solid ${colors.lightRed};
  margin-top: 30px;
`
export interface IState {}

export default class StageTwo extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Section
          bgColor={colors.lightBlue}
          title={'Questions 10-16'}
          titleStyle={{ color: colors.lightRed }}
          subTitleStyle={{ fontSize: '22px' }}
          subTitle={
            'Complete the table. Write NO MORE THAN THREE WORDS for each answer'
          }
        >
          <TableQuestion />
          <Border />
        </Section>
      </Container>
    )
  }
}
