import React, { Component } from 'react'

interface IProps {}

interface IState {}

class TestScreen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <div>
        <p>TestScreen</p>
      </div>
    )
  }
}

TestScreen.defaultProps = {}

export default TestScreen
