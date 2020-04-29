import { Wizard } from "@front10/landing-page-book/dist/components"
import Question from "components/QuestionIelts/Question"
import { DataIelts } from "containers/listening-ielts-beginners/TotalStepListening"
import _ from "lodash"
import * as React from "react"
import { images } from "themes"
// import steps from './stepsData.json'
import TitleQuestion from "./title-question/TitleQuestion"

const steps: DataIelts[] = [
  {
    level: "ielts_beginner",
    number: 1,
    type: "reading",
  },
  {
    level: "ielts_beginner",
    number: 2,
    type: "reading",
  },
  {
    level: "ielts_beginner",
    number: 3,
    type: "reading",
  },
  {
    level: "ielts_beginner",
    number: 4,
    type: "reading",
  },
  {
    level: "ielts_beginner",
    number: 5,
    type: "reading",
  },
  {
    level: "ielts_beginner",
    number: 6,
    type: "reading",
  },
]

const resultStep = _.map(steps, (e) => ({
  name: <TitleQuestion questionNumber={e.number} type={e.type} level={e.level} />,
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
