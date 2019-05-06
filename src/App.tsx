// import '@front10/landing-page-book/dist/themeos/default/index.legacy_browsers.css'
import '@front10/landing-page-book/dist/themes/default/index.scss'

import 'App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer, InformationForm, ResponsiveNav } from 'components'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { strings, RouterHandler } from 'tools'
import './semantic/dist/semantic.min.css'
import { routes } from 'tools/routes'
import { CSSTransition } from 'react-transition-group'
import TestResult from './containers/test-result-screen/TestResult'
// import GeneralScreen from './containers/general-course-screen/GeneralCourse'
import CustomCheckbox from './components/Question/CustomCheckbox'

const ScrollToTop = () => {
  window.scrollTo(0, 0)
  return null
}

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route component={ScrollToTop} />
          <Route path="/test-result" component={TestResult} />
          <ResponsiveNav
            routes={routes}
            hiddenRoute={[strings.routeWhyChoseUs]}
          />
          <div>
            {routes.map(({ path, Component: Comp }) => (
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
          <InformationForm />
          <Footer />
        </>
      </Router>
    )
  }
}

export default App
