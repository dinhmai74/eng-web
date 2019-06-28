import React, { Component } from 'react'
import { colors } from 'themes'
import styled from 'styled-components'
import { Container } from '@front10/landing-page-book/dist/components'
import PartOne from './Part1/PartOne'
import CountDown from './CountDown'
import PartTwo from './Part2/PartTwo'
interface IProps {}

interface IState {}

class Listening extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Container>
        <CountDown />
        <PartOne />
        {/* <PartTwo /> */}
      </Container>
    )
  }
}

export default Listening
