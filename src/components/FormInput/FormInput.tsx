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

class OutlinedTextFields extends React.Component<any, any> {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = () => {
    if (this.props.onSubmit) { this.props.onSubmit({ ...this.state }) }
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
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Phone Number"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Age"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Are you living?"
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
