import { Hero, Navbar } from '@front10/landing-page-book/dist/components'
import '@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import { Trans } from 'react-i18next'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import 'App.css'
import { HomeScreen, ReasonChoseUsScreen } from './containers'
import './semantic/dist/semantic.min.css'
import { strings } from './tools'

class App extends Component {
  render() {
    return (
      <Route>
        <div className="App">
          <Route exact path="/" component={HomeScreen} />
          <Route
            exact
            path={`${strings.routeReasonChoseUs}`}
            component={ReasonChoseUsScreen}
          />
        </div>
      </Route>
    )
  }
}

export default App
