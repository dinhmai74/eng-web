import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import styled from 'styled-components'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

const styles = (theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
})

const TitleQuestion = styled(FormLabel)`
  font-weight: bold;
`

export interface IGeneralCourseState {
  value: string
  // correctAnswer: string
}

class CustomCheckbox extends React.Component<any, IGeneralCourseState> {
  state = {
    value: 'female'
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
    if (event.target.value === this.props.correctAnswer) {
      this.props.dispatch({type: 'INCREASE_POINT'})
    }
    return
  }

  render() {
    const {
      classes,
      titleQuestion,
      firstQuestion,
      secondQuestion,
      thirdQuestion,
      lastQuestion,
      correctAnswer
    } = this.props
    return (
      <div>
        <FormControl>
          <FormLabel style={{paddingTop: '30px'}}>{titleQuestion}</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            // className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value={firstQuestion}
              control={<Radio/>}
              label={firstQuestion}
            />
            <FormControlLabel
              value={secondQuestion}
              control={<Radio/>}
              label={secondQuestion}
            />
            <FormControlLabel
              value={thirdQuestion}
              control={<Radio/>}
              label={thirdQuestion}
            />
            <FormControlLabel
              value={lastQuestion}
              control={<Radio/>}
              label={lastQuestion}
            />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
}

// CustomCheckbox.propTypes = {
//   classes: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(CustomCheckbox)
