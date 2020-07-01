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
import React, { Suspense } from "react"
import { withTranslation } from "react-i18next"
import { Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { strings } from "tools"
import { navRoutes, routes } from "tools/routes"
import "./semantic/dist/semantic.min.css"
import "./tailwind.css"
import { SnackbarProvider } from "notistack"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { colors } from "themes"
import { LoginFormModal } from "components/ResponsiveNav/LoginFormModal"

AOS.init()

const ScrollToTop = () => {
  window.scrollTo(0, 0)
  return null
}

const App = () => {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "light",
          primary: {
            main: colors.main,
            light: colors.main,
            dark: colors.main,
          },
          secondary: {
            main: colors.yellow,
            light: colors.yellow,
            dark: colors.yellow,
          },
          background: {
            // paper: colors.white,
          },
        },
        props: {
          MuiButton: {
            disableElevation: true,
          },
        },
        typography: {
          fontFamily: "Rubik",
          fontSize: 16,
          button: {
            textTransform: "none",
          },
        },
        overrides: {
          MuiButton: {
            root: {
              padding: "12px",
              paddingLeft: "32px",
              paddingRight: "32px",
            },
          },
        },
      }),
    [],
  )
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <div>
            <Route component={ScrollToTop} />
            <ResponsiveNav routes={navRoutes} hiddenRoute={[strings.routeWhyChoseUs]} />
            <div>
              {navRoutes.map(({ path, Component: Comp }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                      <div className="page">
                        <Comp />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
              {routes.map(({ path, Component: Comp }) => (
                <Route key={path} path={path}>
                  {({ match }) => (
                    <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                      <div className="page">
                        <Comp />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}

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
            <LoginFormModal />
            <InformationForm />
            <Footer />
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </Suspense>
  )
}

export default withTranslation()(App)
