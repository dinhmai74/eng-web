import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import CustomCheckbox from '../../components/Question/CustomCheckbox'
import data from '../../components/Question/data/data.json'
import { colors } from 'themes'
import { Button } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { IRoute } from 'tools/routes'
import TestResult from '../test-result-screen/TestResult'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  padding: 40px;
`
const Wrapper = styled.div`
  padding-left: 50px;
  border-style: solid;
  border-color: ${colors.lightGray};
  border-width: 10px;
`
const Answer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex: 1;
  flex-flow: column wrap;
`

export interface IGeneralCourseProps extends RouteComponentProps {
  questionTitle: string
  /*** @property {propTypes.array} routes - display route */
  routes: IRoute[]
  /*** @property {propTypes.string} home icon - icon home display */
  homeIcon?: string
  /*** @property {propTypes.string} hiddenRoute - list route that hide nav bar */
  hiddenRoute?: string[]
  /*** @property {propTypes.boolean} render One page - nav for one page or not */
  renderOnePage?: boolean
  /*** @property {propTypes.boolean} disable headroom- */
  disableHeadroom?: boolean,
  history: any
}

export interface IGeneralCourseState {}

class TestQuestion extends React.Component<IGeneralCourseProps, any> {
  constructor(props: IGeneralCourseProps) {
    super(props)

    this.state = {}
  }

  onButtonClick() {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: '/test-result'
        // search: 'name=jhon&amp;age=24'
      })
    }
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Answer>
            <CustomCheckbox
              titleQuestion={data.question1.titlequestion}
              firstQuestion={data.question1.firstquestion}
              secondQuestion={data.question1.secondquestion}
              thirdQuestion={data.question1.thirdquestion}
              lastQuestion={data.question1.lastquestion}
              correctAnswer={data.question1.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question2.titlequestion}
              firstQuestion={data.question2.firstquestion}
              secondQuestion={data.question2.secondquestion}
              thirdQuestion={data.question2.thirdquestion}
              lastQuestion={data.question2.lastquestion}
              correctAnswer={data.question2.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question3.titlequestion}
              firstQuestion={data.question3.firstquestion}
              secondQuestion={data.question3.secondquestion}
              thirdQuestion={data.question3.thirdquestion}
              lastQuestion={data.question3.lastquestion}
              correctAnswer={data.question3.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question4.titlequestion}
              firstQuestion={data.question4.firstquestion}
              secondQuestion={data.question4.secondquestion}
              thirdQuestion={data.question4.thirdquestion}
              lastQuestion={data.question4.lastquestion}
              correctAnswer={data.question4.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question5.titlequestion}
              firstQuestion={data.question5.firstquestion}
              secondQuestion={data.question5.secondquestion}
              thirdQuestion={data.question5.thirdquestion}
              lastQuestion={data.question5.lastquestion}
              correctAnswer={data.question5.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question6.titlequestion}
              firstQuestion={data.question6.firstquestion}
              secondQuestion={data.question6.secondquestion}
              thirdQuestion={data.question6.thirdquestion}
              lastQuestion={data.question6.lastquestion}
              correctAnswer={data.question6.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question7.titlequestion}
              firstQuestion={data.question7.firstquestion}
              secondQuestion={data.question7.secondquestion}
              thirdQuestion={data.question7.thirdquestion}
              lastQuestion={data.question7.lastquestion}
              correctAnswer={data.question7.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question8.titlequestion}
              firstQuestion={data.question8.firstquestion}
              secondQuestion={data.question8.secondquestion}
              thirdQuestion={data.question8.thirdquestion}
              lastQuestion={data.question8.lastquestion}
              correctAnswer={data.question8.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question9.titlequestion}
              firstQuestion={data.question9.firstquestion}
              secondQuestion={data.question9.secondquestion}
              thirdQuestion={data.question9.thirdquestion}
              lastQuestion={data.question9.lastquestion}
              correctAnswer={data.question9.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question10.titlequestion}
              firstQuestion={data.question10.firstquestion}
              secondQuestion={data.question10.secondquestion}
              thirdQuestion={data.question10.thirdquestion}
              lastQuestion={data.question10.lastquestion}
              correctAnswer={data.question10.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question11.titlequestion}
              firstQuestion={data.question11.firstquestion}
              secondQuestion={data.question11.secondquestion}
              thirdQuestion={data.question11.thirdquestion}
              lastQuestion={data.question11.lastquestion}
              correctAnswer={data.question11.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question12.titlequestion}
              firstQuestion={data.question12.firstquestion}
              secondQuestion={data.question12.secondquestion}
              thirdQuestion={data.question12.thirdquestion}
              lastQuestion={data.question12.lastquestion}
              correctAnswer={data.question12.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question13.titlequestion}
              firstQuestion={data.question13.firstquestion}
              secondQuestion={data.question13.secondquestion}
              thirdQuestion={data.question13.thirdquestion}
              lastQuestion={data.question13.lastquestion}
              correctAnswer={data.question13.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question14.titlequestion}
              firstQuestion={data.question14.firstquestion}
              secondQuestion={data.question14.secondquestion}
              thirdQuestion={data.question14.thirdquestion}
              lastQuestion={data.question14.lastquestion}
              correctAnswer={data.question14.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question15.titlequestion}
              firstQuestion={data.question15.firstquestion}
              secondQuestion={data.question15.secondquestion}
              thirdQuestion={data.question15.thirdquestion}
              lastQuestion={data.question15.lastquestion}
              correctAnswer={data.question15.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question16.titlequestion}
              firstQuestion={data.question16.firstquestion}
              secondQuestion={data.question16.secondquestion}
              thirdQuestion={data.question16.thirdquestion}
              lastQuestion={data.question16.lastquestion}
              correctAnswer={data.question16.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question17.titlequestion}
              firstQuestion={data.question17.firstquestion}
              secondQuestion={data.question17.secondquestion}
              thirdQuestion={data.question17.thirdquestion}
              lastQuestion={data.question17.lastquestion}
              correctAnswer={data.question17.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question18.titlequestion}
              firstQuestion={data.question18.firstquestion}
              secondQuestion={data.question18.secondquestion}
              thirdQuestion={data.question18.thirdquestion}
              lastQuestion={data.question18.lastquestion}
              correctAnswer={data.question18.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question19.titlequestion}
              firstQuestion={data.question19.firstquestion}
              secondQuestion={data.question19.secondquestion}
              thirdQuestion={data.question19.thirdquestion}
              lastQuestion={data.question19.lastquestion}
              correctAnswer={data.question19.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question20.titlequestion}
              firstQuestion={data.question20.firstquestion}
              secondQuestion={data.question20.secondquestion}
              thirdQuestion={data.question20.thirdquestion}
              lastQuestion={data.question20.lastquestion}
              correctAnswer={data.question20.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question21.titlequestion}
              firstQuestion={data.question21.firstquestion}
              secondQuestion={data.question21.secondquestion}
              thirdQuestion={data.question21.thirdquestion}
              lastQuestion={data.question21.lastquestion}
              correctAnswer={data.question21.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question22.titlequestion}
              firstQuestion={data.question22.firstquestion}
              secondQuestion={data.question22.secondquestion}
              thirdQuestion={data.question22.thirdquestion}
              lastQuestion={data.question22.lastquestion}
              correctAnswer={data.question22.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question23.titlequestion}
              firstQuestion={data.question23.firstquestion}
              secondQuestion={data.question23.secondquestion}
              thirdQuestion={data.question23.thirdquestion}
              lastQuestion={data.question23.lastquestion}
              correctAnswer={data.question23.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question24.titlequestion}
              firstQuestion={data.question24.firstquestion}
              secondQuestion={data.question24.secondquestion}
              thirdQuestion={data.question24.thirdquestion}
              lastQuestion={data.question24.lastquestion}
              correctAnswer={data.question24.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.question25.titlequestion}
              firstQuestion={data.question25.firstquestion}
              secondQuestion={data.question25.secondquestion}
              thirdQuestion={data.question25.thirdquestion}
              lastQuestion={data.question25.lastquestion}
              correctAnswer={data.question25.firstquestion}
            />
          </Answer>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="red" onClick={this.onButtonClick.bind(this)}>
              Submit
            </Button>
          </div>
        </Wrapper>
      </Container>
    )
  }
}

export default withRouter(TestQuestion)
