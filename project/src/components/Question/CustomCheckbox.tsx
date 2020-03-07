import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const TitleQuestion = styled(FormLabel)`
  font-weight: bold;
`

export interface IGeneralCourseState {
  value: string
}

class CustomCheckbox extends React.Component<any, IGeneralCourseState> {
  state = {
    value: 'female'
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
    if (event.target.value === this.props.correctAnswer) {
      this.props.dispatch({ type: 'INCREASE_POINT' })
    }
    return
  }

  render() {
    const {
      titleQuestion,
      firstQuestion,
      secondQuestion,
      thirdQuestion,
      lastQuestion,
      correctAnswer,
      style
    } = this.props
    return (
      <div style={style}>
        <FormControl>
          <FormLabel style={{ paddingTop: '30px' }}>{titleQuestion}</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            // className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value={firstQuestion}
              control={<Radio />}
              label={firstQuestion}
            />
            <FormControlLabel
              value={secondQuestion}
              control={<Radio />}
              label={secondQuestion}
            />
            <FormControlLabel
              value={thirdQuestion}
              control={<Radio />}
              label={thirdQuestion}
            />
            <FormControlLabel
              value={lastQuestion}
              control={<Radio />}
              label={lastQuestion}
            />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(CustomCheckbox)
