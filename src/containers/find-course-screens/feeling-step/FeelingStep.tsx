import React, { Component } from 'react'
import { steps } from './questions/steps.js'
import MultiStep from 'react-multistep'

interface IFeelingStepProps {}

interface IFeelingStepState {}

class FeelingStep extends Component<IFeelingStepProps, IFeelingStepState> {
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <p>FeelingStep screen</p>
        <MultiStep steps={steps} />
      </div>
    )
  }
}

export default FeelingStep
