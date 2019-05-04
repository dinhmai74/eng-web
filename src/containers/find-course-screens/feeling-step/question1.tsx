import { NavMargin } from 'components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import Question from 'containers/find-course-screens/feeling-step/QuestionComponent/index'
import { Flex } from 'rebass'
import Header from './QuestionComponent/Header'

const LogoImage = styled.img`
  width: 25%;
`
const Content = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  color: ${colors.lightRed};
`

const Container = styled('div')`
  height: 86vh;
  background-size: cover;
  /* display: flex; */
  align-items: center;
`

const ContainerQuestion = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`

interface IProps {
  style?: any

  [rest: string]: any

  goNext: () => void
}

interface IState {}

class Question1Screen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    const { style, numberQuestion, title } = this.props
    return (
      <Container style={style}>
        <Header title="Question 1" content="When speak English,  I feel" />
        <ContainerQuestion>
          <Question goNext={this.props.goNext} />
        </ContainerQuestion>
      </Container>
    )
  }
}

export default Question1Screen
