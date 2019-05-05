import { NavMargin } from 'components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import Question from 'containers/find-course-screens/feeling-step/QuestionComponent/index'
import { Flex } from 'rebass'
import Header from './QuestionComponent/Header'

const Container = styled('div')`
  height: 70vh;
`

const ContainerQuestion = styled.div`
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

class Question2Screen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    const { style, numberQuestion, title } = this.props
    return (
      <Container
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        style={style}
      >
        <Header title={tran('question2')} content={tran('titleQ2')} />
        <ContainerQuestion>
          <Question goNext={this.props.goNext} />
        </ContainerQuestion>
      </Container>
    )
  }
}

export default Question2Screen
