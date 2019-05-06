import React, { Component } from 'react'
import _ from 'lodash'

export interface ISteps {
  [name: string]: any
}

export interface IPropsBack {

}

interface IStepperProps {
  initialSteps: ISteps
  children: (object: any) => JSX.Element
}

interface IStepperState {
  stepIndex: number
  steps: ISteps
  stepKey: string
}

class Stepper extends Component<IStepperProps, IStepperState> {
  static defaultProps = {}
  state = {
    stepIndex: 0,
    steps: this.props.initialSteps || {},
    stepKey: this.props.initialSteps[0] || ''
  }

  isLastStep = () => {
    return this.state.stepIndex === this.state.steps.length - 1
  }

  isFirstStep = () => {
    return !this.state.stepIndex
  }

  goNext = () => {
    this.setState((prevState: IStepperState) => {
      const total = prevState.steps.length - 1
      const nextValue = prevState.stepIndex + 1
      const nextIndex = nextValue >= total
        ? total
        : nextValue

      return {
        stepIndex: nextIndex,
        stepKey: prevState.steps[nextIndex]
      }
    })
  }

  goBack = () => {
    this.setState((prevState: IStepperState) => {
      const nextValue = prevState.stepIndex - 1
      const prevIndex = nextValue < 0
        ? 0
        : nextValue

      return {
        stepIndex: prevIndex,
        stepKey: prevState.steps[prevIndex]
      }
    })
  }

  goToKey = (key: string) => {
    const {steps, stepIndex} = this.state
    const keys = Object.values(steps)
    const index = _.indexOf(keys, key)

    if (index >= stepIndex) {
      return
    }

    this.setState({
      stepIndex: index,
      stepKey: key
    })
  }

  reset = () => {
    this.setState({
      stepIndex: 0,
      stepKey: this.props.initialSteps[0]
    })
  }

  render() {
    const {children} = this.props
    return children({
      ...this.state,
      goNext: this.goNext,
      goBack: this.goBack,
      goToKey: this.goToKey,
      isLastStep: this.isLastStep(),
      isFirstStep: this.isFirstStep(),
      resetStepper: this.reset
    })
  }
}

export default Stepper
