import * as React from 'react'
import _ from 'lodash'
import { images } from 'themes'

import { Wizard } from '@front10/landing-page-book/dist/components'
import TitleQuestion from 'containers/reading-ielts-beginners/title-question/TitleQuestion'
import stepsDataWriting from './stepsDataWriting.json'
import Question from 'components/QuestionIelts/Question.tsx'

const resultStep = _.map(stepsDataWriting, (e) => ({
  name: <TitleQuestion questionNumber={e.number} type={e.type} />,
  component: (
    <Question
      questionNumber={e.number}
      type={e.type}
      images1={images.iconReading}
      images2={images.iconListening}
      images3={images.iconSpeaking}
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
