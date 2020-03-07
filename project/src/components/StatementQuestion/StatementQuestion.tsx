import { Container, Section } from '@front10/landing-page-book/dist/components'
import React, { Component } from 'react'
import Countdown from 'react-countdown-now'
import styled from 'styled-components'
import { color } from 'styled-system'
import { colors } from 'themes'
import Checkboxes from './Checkboxes'
interface IProps {}

interface IState {}

const Border = styled.div`
  border-top: 1px solid ${colors.gray};
  margin-top: 10px;
`
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  /* background-color: red; */
  justify-content: space-between;
`
const StyledText = styled.div`
  display: flex;
  flex: 1;
  margin-top: 10px;
`
class StatementQuestion extends Component<any, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Container>
        <Wrapper>
          <StyledText>{this.props.statement}</StyledText>
          <Checkboxes correctAnswer = {this.props.correctAnswer}/>
        </Wrapper>

        <Border />
      </Container>
    )
  }
}

export default StatementQuestion
