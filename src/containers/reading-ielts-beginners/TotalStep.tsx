import * as React from 'react'
import _ from 'lodash'

import { Wizard } from '@front10/landing-page-book/dist/components'
import TitleQuestion from './title-question/TitleQuestion'
import steps from './stepsData.json'
import Question from 'components/QuestionIelts/Question'
import { images } from 'themes'

const resultStep = _.map(steps, (e) => ({
  name: (
    <TitleQuestion questionNumber={e.number} type={e.type} level={e.level} />
  ),
  component: (
    <Question
      questionNumber={e.number}
      type={e.type}
      images1={images.iconWriting}
      images2={images.iconListening}
      images3={images.iconSpeaking}
      level={e.level}
    />
  )
}))

export default class TotalStep extends React.Component<any, any> {
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
