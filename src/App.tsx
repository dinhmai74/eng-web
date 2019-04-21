// import '@front10/landing-page-book/dist/themeos/default/index.legacy_browsers.css'
import '@front10/landing-page-book/dist/themes/default/index.scss'

import 'App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer, InformationForm } from 'components'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { strings } from 'tools'
import {
  FindCourseScreen,
  HomeScreen,
  WhyChoseUs,
  TestScreen,
  GeneralCourse
} from './containers'
import './semantic/dist/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Route>
          <Route exact path={strings.routeHome} component={HomeScreen} />
          <Route
            exact
            path={strings.routeWhyChoseUs}
            component={WhyChoseUs}
          />
          <Route exact path={strings.routeTest} component={TestScreen} />
          <Route
            exact
            path={strings.routeGeneralCourse}
            component={GeneralCourse}
          />

          <InformationForm/>
          <Footer />
      </Route>
    )
  }
}

export default App
