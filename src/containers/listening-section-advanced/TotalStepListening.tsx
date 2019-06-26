import * as React from 'react'
import _ from 'lodash'
import { images, colors } from 'themes'

import { Wizard, Section } from '@front10/landing-page-book/dist/components'
import TitleQuestion from 'containers/reading-ielts-beginners/title-question/TitleQuestion'
import stepsDataListening from './stepsDataListening.json'
import Question from 'components/QuestionIelts/Question.tsx'
import { controls } from 'react-media-player'
import QuestionAudio from 'components/QuestionAudio/QuestionAudio.tsx'
import DescribeQuestion from 'components/DescribeQuestion/DescribeQuestion'
import QuestionPlayAudio from 'components/QuestionPlayAudio/QuestionPlayAudio'
import styled from 'styled-components'
import AudioListening from 'components/AudioListening/AudioListening'

export interface IState {
  play: boolean
  pause: boolean
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Border = styled.div`
  border-top: 5px solid #ed433c;
  margin-top: 30px;
`

const resultStep = _.map(stepsDataListening, (e) => ({
  name: (
    <Container>
      <AudioListening questionNumber={e.number} type={e.type} />
    </Container>
  ),

  component: (
    <div>
      <TitleQuestion questionNumber={e.number} type={e.type} level={e.level} />
      <Question
        questionNumber={e.number}
        type={e.type}
        images1={images.iconWriting}
        images2={images.iconListening}
        images3={images.iconReading}
        level={e.level}
      />
    </div>
  )
}))

export default class TotalStepListening extends React.Component<any, IState> {
  render() {
    return (
      <Section
        bgColor={colors.lightBlue}
        title={'Questions 1-3'}
        titleStyle={{ color: colors.lightRed }}
        subTitleStyle={{ fontSize: '22px' }}
        subTitle={'Choose the appropriate answer.'}
      >
        <Wizard
          contentAlign="left"
          backButtonText="Prev"
          steps={resultStep}
          // prevBtnOnLastStep={false}
          // nextBtnOnLastStep={false}
        />
        <Border />
      </Section>
    )
  }
}
