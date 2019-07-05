import React, { Component } from 'react'
import { colors } from 'themes'
import styled from 'styled-components'
import { Container } from '@front10/landing-page-book/dist/components'
// import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import InputAnswer from 'components/Input/InputAnswer'

const StyledText = styled.div`
  padding-top: 20px;
  padding-right: 4px;
`
const Containers = styled(Container)`
  padding-bottom: 10px;
`
export interface IGeneralCourseState {
  value: string
}
class Text extends Component<any, IGeneralCourseState> {
  static defaultProps: {}
  state = {
    value: 'abc'
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value })
    if (event.target.value === this.props.correctAnswer) {
      this.props.dispatch({ type: 'INCREASE_POINT' })
    }
    return
  }
  render() {
    return (
      <Containers>
        <div style={{ display: 'inline-flex' }}>
          <StyledText>{this.props.content1} </StyledText>
          <InputAnswer
            style={{ marginLeft: '3px' }}
            value={this.props.value}
            correctAnswer={this.props.correctAnswer}
          />

          <StyledText>{this.props.content2}</StyledText>
        </div>
      </Containers>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(Text)
