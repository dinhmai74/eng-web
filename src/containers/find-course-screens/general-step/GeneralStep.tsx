import React, { Component } from 'react'

interface IGeneralStepProps {
}

interface IGeneralStepState {
}

class GeneralStep extends Component<IGeneralStepProps, IGeneralStepState> {
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <p>GeneralStep screen</p>
      </div>
    )
  }
}

export default GeneralStep
