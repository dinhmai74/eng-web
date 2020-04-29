import { Section, Wizard } from "@front10/landing-page-book/dist/components"
import AudioListening from "components/AudioListening/AudioListening"
import Question from "components/QuestionIelts/Question.tsx"
import { stepsDataListening } from "containers/listening-ielts-beginners/TotalStepListening"
import TitleQuestion from "containers/reading-ielts-beginners/title-question/TitleQuestion"
import _ from "lodash"
import * as React from "react"
import styled from "styled-components"
import { colors, images } from "themes"

export interface IState {
  play: boolean
  pause: boolean
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Border = styled.div`
  border-top: 5px solid ${colors.lightRed};
  margin-top: 30px;
`

const resultStep = _.map(stepsDataListening, (e) => ({
  name: (
    <Container>
      <AudioListening questionNumber={e.number} type={e.type} />
    </Container>
  ),

  component: (
    <div>
      <TitleQuestion questionNumber={e.number} type={e.type} level={e.level} />
      <Question
        questionNumber={e.number}
        type={e.type}
        images1={images.iconWriting}
        images2={images.iconListening}
        images3={images.iconReading}
        level={e.level}
      />
    </div>
  ),
}))

export default class StageOne extends React.Component<any, IState> {
  render() {
    return (
      <Section
        bgColor={colors.lightBlue}
        title={"Questions 1-3"}
        titleStyle={{ color: colors.lightRed }}
        subTitleStyle={{ fontSize: "22px" }}
        subTitle={"Choose the appropriate answer."}
      >
        <Wizard
          contentAlign="left"
          backButtonText="Prev"
          steps={resultStep}
          // prevBtnOnLastStep={false}
          // nextBtnOnLastStep={false}
        />
        <Border />
      </Section>
    )
  }
}
