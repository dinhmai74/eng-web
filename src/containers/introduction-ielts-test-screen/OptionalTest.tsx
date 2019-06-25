import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { Button, Icon } from 'semantic-ui-react'
import { tran } from 'localization/i18n'

import { Section, Container } from '@front10/landing-page-book/dist/components'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { IRoute } from 'tools/routes'

export interface IGeneralCourseProps extends RouteComponentProps {
  /*** @property {propTypes.array} routes - display route */
  routes?: IRoute[]
  /*** @property {propTypes.string} home icon - icon home display */
  homeIcon?: string
  /*** @property {propTypes.string} hiddenRoute - list route that hide nav bar */
  hiddenRoute?: string[]
  /*** @property {propTypes.boolean} render One page - nav for one page or not */
  renderOnePage?: boolean
  /*** @property {propTypes.boolean} disable headroom- */
  disableHeadroom?: boolean
  history: any
}
export interface IGeneralCourseState {
  value: string
}

class OptionalTest extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  state = {
    value: ''
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
    if (this.state.value === 'reading') {
      const { history } = this.props
      if (history) {
        history.push({
          pathname: '/reading-ielts-beginner'
          // search: 'name=jhon&amp;age=24'
        })
      }
    } else if (this.state.value === 'writing') {
      const { history } = this.props
      if (history) {
        history.push({
          pathname: '/writing-ielts-beginner'
          // search: 'name=jhon&amp;age=24'
        })
      }
    } else if (this.state.value === 'speaking') {
      const { history } = this.props
      if (history) {
        history.push({
          pathname: '/speaking-ielts-beginner'
          // search: 'name=jhon&amp;age=24'
        })
      }
    } else if (this.state.value === 'listening') {
      const { history } = this.props
      if (history) {
        history.push({
          pathname: '/listening-ielts-beginner'
          // search: 'name=jhon&amp;age=24'
        })
      }
    }
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
            value="writing"
            control={<Radio color="default" />}
            label="Writing"
            labelPlacement="end"
          />
        </RadioGroup>
        <Button color="youtube" onClick={this.handleChange}>
          {tran('startImmediately')}
        </Button>
      </FormControl>
    )
  }
}

export default withRouter(OptionalTest)
