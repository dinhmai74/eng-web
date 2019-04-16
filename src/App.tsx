import { Hero, Navbar } from '@front10/landing-page-book/dist/components'
import '@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css'
import 'App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import { Trans } from 'react-i18next'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {
  FindCourseScreen,
  HomeScreen,
  ReasonChoseUsScreen,
  TestScreen,
} from './containers'
import './semantic/dist/semantic.min.css'
import { strings } from './tools'

class App extends Component {
  render() {
    return (
      <Route>
        <div className="App">
          <Route exact path={strings.routeHome} component={HomeScreen} />
          <Route
            exact
            path={strings.routeReasonChoseUs}
            component={ReasonChoseUsScreen}
          />
          <Route exact path={strings.routeTest} component={TestScreen} />
          <Route
            exact
            path={strings.routeFindCourse}
            component={FindCourseScreen}
          />
        </div>
      </Route>
    )
  }
}

export default App
