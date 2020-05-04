// import '@front10/landing-page-book/dist/themeos/default/index.legacy_browsers.css'
import "@front10/landing-page-book/dist/themes/default/index.scss"
// import GeneralScreen from './containers/general-course-screen/GeneralCourse'
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// import "bootstrap/dist/css/bootstrap.min.css"
import { Footer, InformationForm, ResponsiveNav } from "components"
import {
  CambridgeTest,
  CourseDetailScreen,
  CourseSuggestDetailScreen,
  IntroductionIeltsTest,
  PreparationIelts,
  ReadingIeltsBeginners,
  Result,
  TestQuestion,
  TestResult,
} from "containers"
import Intro from "containers/introduction-ielts-advanced/Intro"
import ListeningIelts from "containers/listening-ielts-beginners/ListeningIetls"
import Listening from "containers/listening-section-advanced/Listening"
import PartTwo from "containers/listening-section-advanced/Part2/PartTwo"
import ListeningSection from "containers/listening-section/ListeningSection"
import ResultIelts from "containers/result-ielts-advanced/ResultIelts"
import SpeakingIelts from "containers/speaking-ielts-beginners/SpeakingIelts"
import WritingIeltsBeginners from "containers/writing-ielts-beginners/WritingIeltsBeginners"
import "font-awesome/css/font-awesome.min.css"
import React from "react"
import { withTranslation } from "react-i18next"
import { Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { strings } from "tools"
import { navRoutes } from "tools/routes"
import "./semantic/dist/semantic.min.css"
import "./tailwind.css"

AOS.init()

const ScrollToTop = () => {
  window.scrollTo(0, 0)
  return null
}

const baseUrl = process.env.PUBLIC_URL

const App = (props) => {
  return (
    <div>
      <Route component={ScrollToTop} />
      <ResponsiveNav routes={navRoutes} hiddenRoute={[strings.routeWhyChoseUs]} />
      <div>
        {navRoutes.map(({ path, Component: Comp }) => (
          <Route key={path} exact path={baseUrl + path}>
            {({ match }) => (
              <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                <div className="page">
                  <Comp />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Route path={`${strings.routeSugestionCourse}/:id`} component={CourseSuggestDetailScreen} />
        <Route path={`${strings.routeDetailCourse}/:id`} component={CourseDetailScreen} />

        <Route path="/test-result" component={TestResult} />
        <Route path="/result" component={Result} />
        <Route path="/level-test" component={CambridgeTest} />
        <Route path="/cambridge-test" component={TestQuestion} />
        <Route path="/ielts-test" component={PreparationIelts} />
        <Route path="/intro-test-ielts" component={IntroductionIeltsTest} />
        <Route path="/reading-ielts-beginner" component={ReadingIeltsBeginners} />
        <Route path="/writing-ielts-beginner" component={WritingIeltsBeginners} />
        <Route path="/speaking-ielts-beginner" component={SpeakingIelts} />
        <Route path="/listening-ielts-beginner" component={ListeningIelts} />
        <Route path="/intro-ielts-advanced" component={Intro} />
        <Route path="/listening-section-test" component={ListeningSection} />
        <Route path="/listening-test-advanced" component={Listening} />
        <Route path="/listening-test-advanced-part2" component={PartTwo} />
        <Route path="/result-ielts-advance" component={ResultIelts} />
      </div>
      <InformationForm />
      <Footer />
    </div>
  )
}

export default withTranslation()(App)
