import { Container } from '@front10/landing-page-book/dist/components'
// import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { colors } from 'themes'

export interface IGeneralCourseState {
  value: string
}
class InputAnswer extends Component<any, IGeneralCourseState> {
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
    const style = this.props.style
    return (
      <TextField
        id="standard-name"
        style={style}
        margin="normal"
        defaultValue={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(InputAnswer)
