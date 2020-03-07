import _ from 'lodash'
import * as React from 'react'
import { colors, images } from 'themes'

import {
  Container,
  Section,
  Wizard
} from '@front10/landing-page-book/dist/components'
import AudioListening from 'components/AudioListening/AudioListening'
import Question from 'components/QuestionIelts/Question.tsx'
import TableQuestion from 'components/TableQuestion/TableQuestion'
import TitleQuestion from 'containers/reading-ielts-beginners/title-question/TitleQuestion'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'
import stepsDataListening from '../stepsDataListening.json'
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
