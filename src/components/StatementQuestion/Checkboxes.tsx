import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'

class Checkboxes extends React.Component<any, any> {
  state = {
    checkedA: false
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked })
    if (event.target.checked === this.props.correctAnswer) {
      this.props.dispatch({ type: 'INCREASE_POINT' })
    }
  }
  render() {
    const correctAnswer = this.props
    return (
      <div>
        <Checkbox
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value={'checkedA'}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(Checkboxes)
