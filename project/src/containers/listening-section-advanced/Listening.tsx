import { Container } from '@front10/landing-page-book/dist/components'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes'
import CountDown from './CountDown'
import PartOne from './Part1/PartOne'
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
