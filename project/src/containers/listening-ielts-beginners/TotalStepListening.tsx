import _ from 'lodash'
import * as React from 'react'
import { images } from 'themes'

import { Wizard } from '@front10/landing-page-book/dist/components'
import DescribeQuestion from 'components/DescribeQuestion/DescribeQuestion'
import Question from 'components/QuestionIelts/Question.tsx'
import QuestionPlayAudio from 'components/QuestionPlayAudio/QuestionPlayAudio'
import TitleQuestion from 'containers/reading-ielts-beginners/title-question/TitleQuestion'
import { controls } from 'react-media-player'
import styled from 'styled-components'
import stepsDataListening from './stepsDataListening.json'

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
      <TitleQuestion questionNumber={e.number} type={e.type} level={e.level} />
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
        url1="/writing-ielts-beginner"
        images2={images.iconSpeaking}
        url2="/speaking-ielts-beginner"
        images3={images.iconReading}
        url3="/reading-ielts-beginner"
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
