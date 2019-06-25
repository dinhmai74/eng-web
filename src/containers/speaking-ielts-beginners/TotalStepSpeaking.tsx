import * as React from 'react'
import _ from 'lodash'
import { images } from 'themes'

import { Wizard } from '@front10/landing-page-book/dist/components'
import TitleQuestion from 'containers/reading-ielts-beginners/title-question/TitleQuestion'
import stepsDataSpeaking from './stepsDataSpeaking.json'
import Question from 'components/QuestionIelts/Question.tsx'
import { controls } from 'react-media-player'
import QuestionAudio from 'components/QuestionAudio/QuestionAudio.tsx'
const { PlayPause, MuteUnmute } = controls

export interface IState {
  play: boolean
  pause: boolean
}

const resultStep = _.map(stepsDataSpeaking, (e) => ({
  name: <TitleQuestion questionNumber={e.number} type={e.type}/>,
  component: (
    <QuestionAudio
      questionNumber={e.number}
      type={e.type}
      images1={images.iconWriting}
      images2={images.iconListening}
      images3={images.iconReading}
    />
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
