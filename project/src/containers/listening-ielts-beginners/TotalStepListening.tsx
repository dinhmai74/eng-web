import { Wizard } from "@front10/landing-page-book/dist/components"
import DescribeQuestion from "components/DescribeQuestion/DescribeQuestion"
import { TLevel } from "components/LevelIelts/Level"
import Question from "components/QuestionIelts/Question.tsx"
import QuestionPlayAudio from "components/QuestionPlayAudio/QuestionPlayAudio"
import { TQuestion } from "containers/reading-ielts-beginners/Question/type"
import TitleQuestion from "containers/reading-ielts-beginners/title-question/TitleQuestion"
import _ from "lodash"
import * as React from "react"
import styled from "styled-components"
import { images } from "themes"

// import stepsDataListening from './stepsDataListening.json'
export interface DataIelts {
  level: TLevel
  number: number
  type: TQuestion
}
export const stepsDataListening: DataIelts[] = [
  {
    level: "ielts_beginner",
    number: 1,
    type: "listening",
  },
  {
    level: "ielts_beginner",
    number: 2,
    type: "listening",
  },
  {
    level: "ielts_beginner",
    number: 3,
    type: "listening",
  },
  {
    level: "ielts_beginner",
    number: 4,
    type: "listening",
  },
  {
    level: "ielts_beginner",
    number: 5,
    type: "listening",
  },
  {
    level: "ielts_beginner",
    number: 6,
    type: "listening",
  },
]

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
  ),
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
