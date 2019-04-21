import ResponsiveNav from 'components/ResponsiveNav'
import React, { Component } from 'react'
import { colors } from 'themes'

interface IProps {}

interface IState {}

class TestScreen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <div style={{padding: '20px'}}>
        <ResponsiveNav chosenIndex={3} bgColor={colors.black} />
        <p>TestScreen</p>
      </div>
    )
  }
}

TestScreen.defaultProps = {}

export default TestScreen
