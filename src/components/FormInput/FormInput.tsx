import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { tran } from 'localization/i18n'

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

export interface IRegisterInputState {
  name: string
  phone: string
  age: string
  place: string
  email: string
  [rest: string]: any
}

type TFieldName = 'name' | 'phone' | 'age' | 'place' | 'email'

class OutlinedTextFields extends React.Component<any, IRegisterInputState> {
  state = {
    name: '',
    age: '',
    phone: '',
    place: '',
    email: ''
  }

  handleChange = (name: TFieldName) => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div>
          <TextField
            id="outlined-name-input"
            label="Full Name"
            className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            className={classes.textField}
            onChange={this.handleChange('email')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Phone Number"
            onChange={this.handleChange('phone')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Age"
            onChange={this.handleChange('age')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Are you living?"
            onChange={this.handleChange('place')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ marginTop: '18px', width: '225px', height: '50px' }}
            onClick={this.handleSubmit}
          >
            {tran('submit')}
          </Button>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(OutlinedTextFields)
