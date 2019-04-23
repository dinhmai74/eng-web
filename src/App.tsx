// import '@front10/landing-page-book/dist/themeos/default/index.legacy_browsers.css'
import '@front10/landing-page-book/dist/themes/default/index.scss'

import 'App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer, InformationForm, ResponsiveNav } from 'components'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import { strings } from 'tools'
import {
  FindCourseScreen,
  HomeScreen,
  WhyChoseUs,
  TestScreen,
  GeneralCourse
} from './containers'
import './semantic/dist/semantic.min.css'
import { routes } from 'tools/routes'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <ResponsiveNav />
          <div >
            {routes.map(({ path, Component : Comp }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Comp />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}

          </div>
          <InformationForm/>
          <Footer/>
        </>
      </Router>
    )
  }
}

export default App
