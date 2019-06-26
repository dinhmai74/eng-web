import React, { Component } from 'react'
import { colors } from 'themes'
import styled from 'styled-components'
import { Container } from '@front10/landing-page-book/dist/components'
import CountDown from './CountDown'
import AudioListening from 'components/AudioListening/AudioListening'
import TotalStepListening from './TotalStepListening'
import FinalStep from './FinalStep'
interface IProps {}

interface IState {}

class Listening extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Container>
        <CountDown />
        <TotalStepListening />
        <FinalStep />
      </Container>
    )
  }
}

export default Listening
