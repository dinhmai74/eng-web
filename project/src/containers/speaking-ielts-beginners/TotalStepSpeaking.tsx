import { Wizard } from "@front10/landing-page-book/dist/components"
import QuestionAudio from "components/QuestionAudio/QuestionAudio.tsx"
import { DataIelts } from "containers/listening-ielts-beginners/TotalStepListening"
import TitleQuestion from "containers/reading-ielts-beginners/title-question/TitleQuestion"
import _ from "lodash"
import * as React from "react"
import { controls } from "react-media-player"
import { images } from "themes"

// import stepsDataSpeaking from './stepsDataSpeaking.json'
const { PlayPause, MuteUnmute } = controls

export const stepsDataSpeaking: DataIelts[] = [
  {
    level: "ielts_beginner",
    number: 1,
    type: "speaking",
  },
  {
    level: "ielts_beginner",
    number: 2,
    type: "speaking",
  },
  { level: "ielts_beginner", number: 3, type: "speaking" },
  {
    level: "ielts_beginner",
    number: 4,
    type: "speaking",
  },
  {
    level: "ielts_beginner",
    number: 5,
    type: "speaking",
  },
  {
    level: "ielts_beginner",
    number: 6,
    type: "speaking",
  },
]

export interface IState {
  play: boolean
  pause: boolean
}

const resultStep = _.map(stepsDataSpeaking, (e) => ({
  name: <TitleQuestion questionNumber={e.number} type={e.type} />,
  component: (
    <QuestionAudio
      questionNumber={e.number}
      type={e.type}
      images1={images.iconWriting}
      url1="/writing-ielts-beginner"
      images2={images.iconListening}
      url2="/listening-ielts-beginner"
      images3={images.iconReading}
      url3="/reading-ielts-beginner"
      level={e.level}
    />
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
