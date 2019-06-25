import * as React from 'react'
import _ from 'lodash'
import { images } from 'themes'

import { Wizard } from '@front10/landing-page-book/dist/components'
import TitleQuestion from 'containers/reading-ielts-beginners/title-question/TitleQuestion'
import stepsDataListening from './stepsDataListening.json'
import Question from 'components/QuestionIelts/Question.tsx'
import { controls } from 'react-media-player'
import QuestionAudio from 'components/QuestionAudio/QuestionAudio.tsx'
import DescribeQuestion from 'components/DescribeQuestion/DescribeQuestion'
import QuestionPlayAudio from 'components/QuestionPlayAudio/QuestionPlayAudio'
import styled from 'styled-components'

export interface IState {
  play: boolean
  pause: boolean
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const resultStep = _.map(stepsDataListening, (e) => ({
  name: (
    <Container>
      <TitleQuestion questionNumber={e.number} type={e.type} />
      <QuestionPlayAudio questionNumber={e.number} type={e.type} />
    </Container>
  ),

  component: (
    <div>
      <DescribeQuestion questionNumber={e.number} type={e.type} />
      <Question
        questionNumber={e.number}
        type={e.type}
        images1={images.iconWriting}
        images2={images.iconListening}
        images3={images.iconReading}
      />
    </div>
  )
}))

export default class TotalStep extends React.Component<any, IState> {
  render() {
    return (
      <Wizard
        contentAlign="left"
        backButtonText="Prev"
        steps={resultStep}
        prevBtnOnLastStep={false}
      />
    )
  }
}
