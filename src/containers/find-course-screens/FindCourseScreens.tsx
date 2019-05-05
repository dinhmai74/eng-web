import { NavMargin } from 'components'
import _ from 'lodash'
import CareerStep from 'containers/find-course-screens/career-step'
import Question1Step from 'containers/find-course-screens/feeling-step/question1'
import Question2Step from 'containers/find-course-screens/feeling-step/question2'
import Question3Step from 'containers/find-course-screens/feeling-step/question3'
import GeneralStep from 'containers/find-course-screens/general-step'
import Steps, { Step } from 'rc-steps'
import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'
import Stepper, { ISteps } from './Stepper'
import React, { Component } from 'react'

import { Container } from './atoms'

interface IProps {}

interface IState {}

const steps: ISteps = {
  general: GeneralStep,
  career: CareerStep,
  question1: Question1Step,
  question2: Question2Step,
  question3: Question3Step
}

const StepField = ({ stepKey, ...rest }) => {
  const StepComponent = steps[stepKey]

  return <StepComponent stepKey={stepKey} {...rest} />
}

class FindCourseScreen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  renderComponent = (stepKey, goNext, goToKey) => {
    const keys = Object.keys(steps)
    const index = _.indexOf(keys, stepKey)

    return (
      <React.Fragment>
        <StepField
          stepKey={stepKey}
          goNext={goNext}
          style={{ marginBottom: 30, minHeight: '75vh' }}
        />

        <Steps labelPlacement="vertical" current={index}>
          {_.map(steps, (val, key) => (
            <Step key={key} onClick={() => goToKey(key)} />
          ))}
        </Steps>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Container>
        <Stepper initialSteps={Object.keys(steps)}>
          {({ stepKey, goNext, goToKey }) => {
            return this.renderComponent(stepKey, goNext, goToKey)
          }}
        </Stepper>
      </Container>
    )
  }
}

FindCourseScreen.defaultProps = {}

export default FindCourseScreen
