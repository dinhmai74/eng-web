import React, { Component } from 'react'
import { colors } from 'themes'
import styled from 'styled-components'
import { Container } from '@front10/landing-page-book/dist/components'
import AudioListening from 'components/AudioListening/AudioListening'
import CountDown from '../CountDown'
import StageTwo from './StageTwo'
import FinalStep from './FinalStep'
interface IProps {}

interface IState {}

class PartTwo extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Container>
        <CountDown />
        <StageTwo />
        <FinalStep />
      </Container>
    )
  }
}

export default PartTwo
