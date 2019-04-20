import '@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css'
import 'App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from 'components'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { strings } from 'tools'
import {
  FindCourseScreen,
  HomeScreen,
  ReasonChoseUsScreen,
  TestScreen,
} from './containers'
import './semantic/dist/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Route>
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
          <Footer />
      </Route>
    )
  }
}

export default App
