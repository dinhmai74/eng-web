import { NavMargin } from 'components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import Question from 'containers/find-course-screens/feeling-step/QuestionComponent/index'

const Container = styled('div')`
  height: 86vh;
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

class Question2Screen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    const { style } = this.props
    return (
      <Container style={style}>
        <div>question 2</div>
        <ContainerQuestion>
          <Question goNext={this.props.goNext} />
        </ContainerQuestion>
      </Container>
    )
  }
}

export default Question2Screen
