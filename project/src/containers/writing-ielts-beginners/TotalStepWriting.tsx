import { Wizard } from "@front10/landing-page-book/dist/components"
import Question from "components/QuestionIelts/Question.tsx"
import { DataIelts } from "containers/listening-ielts-beginners/TotalStepListening"
import TitleQuestion from "containers/reading-ielts-beginners/title-question/TitleQuestion"
import _ from "lodash"
import * as React from "react"
import { images } from "themes"

// import stepsDataWriting from './stepsDataWriting.json'
const stepsDataWriting: DataIelts[] = [
  {
    number: 1,
    level: "ielts_beginner",
    type: "writting",
  },
  {
    number: 2,
    level: "ielts_beginner",
    type: "writting",
  },
  {
    number: 3,
    level: "ielts_beginner",
    type: "writting",
  },
  {
    number: 4,
    level: "ielts_beginner",
    type: "writting",
  },
  {
    number: 5,
    level: "ielts_beginner",
    type: "writting",
  },
  {
    number: 6,
    level: "ielts_beginner",
    type: "writting",
  },
]

const resultStep = _.map(stepsDataWriting, (e) => ({
  name: <TitleQuestion questionNumber={e.number} type={e.type} />,
  component: (
    <Question
      questionNumber={e.number}
      type={e.type}
      images1={images.iconReading}
      url1="/reading-ielts-beginner"
      images2={images.iconListening}
      url2="/listening-ielts-beginner"
      images3={images.iconSpeaking}
      url3="/speaking-ielts-beginner"
    />
  ),
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
