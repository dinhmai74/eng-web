import { Container } from '@front10/landing-page-book/dist/components'
import AudioListening from 'components/AudioListening/AudioListening'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes'
import CountDown from '../CountDown'
import FinalStep from './FinalStep'
import StageOne from './StageOne'
interface IProps {}

interface IState {}

class PartOne extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Container>
        <StageOne />
        <FinalStep />
      </Container>
    )
  }
}

export default PartOne
