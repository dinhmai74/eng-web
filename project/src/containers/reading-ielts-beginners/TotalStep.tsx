import * as React from 'react'
import _ from 'lodash'

import TitleQuestion from './title-question/TitleQuestion'
import steps from './stepsData.json'
import Question from 'components/QuestionIelts/Question'
import { images } from 'themes'
import {
  Container,
  Image,
  Button,
  Wizard
} from '@front10/landing-page-book/dist/components'

const resultStep = _.map(steps, (e) => ({
  name: (
    <TitleQuestion questionNumber={e.number} type={e.type} level={e.level} />
  ),
  component: (
    <Question
      questionNumber={e.number}
      type={e.type}
      images1={images.iconWriting}
      url1="/writing-ielts-beginner"
      images2={images.iconListening}
      url2="/listening-ielts-beginner"
      images3={images.iconSpeaking}
      url3="/speaking-ielts-beginner"
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
