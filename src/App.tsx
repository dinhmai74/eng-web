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
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import Result from 'containers/find-course-screens/result/result'

AOS.init()

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
            <Route path="/result" component={Result} />
          </div>
          <InformationForm />
          <Footer />
        </>
      </Router>
    )
  }
}

export default App
