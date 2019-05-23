import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

class OptionalTest extends React.Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <FormControl>
        <RadioGroup
          aria-label="position"
          name="position"
          value={this.state.value}
          onChange={this.handleChange}
          row
        >
          <FormControlLabel
            value="listening"
            control={<Radio color="default" />}
            label="Listening"
            labelPlacement="end"
          />
          <FormControlLabel
            value="speaking"
            control={<Radio color="default" />}
            label="Speaking"
            labelPlacement="end"
          />
          <FormControlLabel
            value="reading"
            control={<Radio color="default" />}
            label="Reading"
            labelPlacement="end"
          />
          <FormControlLabel
            value="writting"
            control={<Radio color="default" />}
            label="Writting"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    )
  }
}

export default OptionalTest
