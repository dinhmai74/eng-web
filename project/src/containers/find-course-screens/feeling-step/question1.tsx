import { NavMargin } from 'components'
import Question from 'containers/find-course-screens/feeling-step/QuestionComponent/index'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Flex } from 'rebass'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import Header from './QuestionComponent/Header'

import firebase from '../../../firebase'

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

  onChange: (key: string, value: any) => void
}

interface IState {
  question: object
}

class Question1Screen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {
    question: {}
  }

  handleOnchange = (value: string): void => {
    this.props.onChange('question_1', value)
  }

  componentDidMount() {
    const questionRef = firebase.database().ref('questions/question_1')
    questionRef.on('value', (snapshot) => {
      this.setState({
        question: snapshot!.val()
      })
    })
  }

  render() {
    const { style, numberQuestion, title, ...rest } = this.props
    const question: any = this.state.question

    return (
      <Container
        data-aos="flip-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        style={style}
      >
        <Header title={tran('question1')} content={question.title} />
        <ContainerQuestion>
          <Question onChange={this.handleOnchange} answers={question.answers} />
        </ContainerQuestion>
      </Container>
    )
  }
}

export default Question1Screen
