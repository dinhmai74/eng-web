import { ResponsiveNav } from 'components'
import ReasonChoseUsScreen from 'containers/why-chose-us/reason-chose-us-screen'
import React, { Component } from 'react'
import { colors } from 'themes'

interface IProps {
}

interface IState {
}

class WhyChoseUsScreen extends Component<IProps, IState> {
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <ResponsiveNav bgColor={colors.black} chosenIndex={1} />
        <br/>
        <br/>
        <br/>
        <ReasonChoseUsScreen/>
      </div>
    )
  }
}

export default WhyChoseUsScreen
