import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

export class RouteHandler extends React.Component<RouteComponentProps> {

  componentWillReceiveProps(nextProps) {

    const { location, history: { action } } = nextProps
    if (location !== this.props.location && action === 'PUSH') {
      // new navigation - scroll to top
      window.scrollTo(0, 0)
    }

    // eventually we might want to try setting up some scroll logic for 'POP'
    // events (back button) to re-set the previous scroll position

  }

  render() {
    return this.props.children
  }
}

export default withRouter(RouteHandler)
