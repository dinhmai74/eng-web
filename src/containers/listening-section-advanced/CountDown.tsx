import React, { Component } from 'react'
import { colors } from 'themes'
import Countdown from 'react-countdown-now'
import styled from 'styled-components'
import { Container, Section } from '@front10/landing-page-book/dist/components'
import { color } from 'styled-system'
interface IProps {}

interface IState {}

const Completionist = () => <span>You are good to go!</span>
const Containers = styled(Container)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`
const StyledTime = styled.span`
  font-size: 28px !important;
`

const Rectangle = styled.div`
  width: 10vw;
  height: 5vh;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
`
const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <StyledTime>
        {minutes}:{seconds}
      </StyledTime>
    )
  }
}
const Border = styled.div`
  border-top: 3px solid ${colors.lightRed};
  margin-top: 30px;
`
class CoutDown extends Component<any, IState> {
  static defaultProps: {}
  state = {}

  render() {
    const titles = this.props
    return (
      <Section
        bgColor={colors.lightBlue}
        title={'PART2. QUESTION 10-20'}
        titleStyle={{ color: colors.darkBLue, fontSize: '30px' }}
      >
        <Rectangle>
          <Countdown date={Date.now() + 500000} renderer={renderer} />
        </Rectangle>
        <Border />
      </Section>
    )
  }
}

export default CoutDown
