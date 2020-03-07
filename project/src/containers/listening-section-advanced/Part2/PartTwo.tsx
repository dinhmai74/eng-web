import { Container } from '@front10/landing-page-book/dist/components'
import AudioListening from 'components/AudioListening/AudioListening'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes'
import CountDown from '../CountDown'
import FinalStep from './FinalStep'
import StageTwo from './StageTwo'
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
