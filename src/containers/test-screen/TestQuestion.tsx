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
  disableHeadroom?: boolean
}

export interface IGeneralCourseState {
}

class TestQuestion extends React.Component<IGeneralCourseProps, any> {
  constructor(props: IGeneralCourseProps) {
    super(props)

    this.state = {}
  }

  onButtonClick() {
    const {history} = this.props
    history.push({
      pathname: '/test-result',
      // search: 'name=jhon&amp;age=24'
    })
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Answer>
            <CustomCheckbox
              titleQuestion={data.questionone.titlequestion}
              firstQuestion={data.questionone.firstquestion}
              secondQuestion={data.questionone.secondquestion}
              thirdQuestion={data.questionone.thirdquestion}
              lastQuestion={data.questionone.lastquestion}
              correctAnswer={data.questionone.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.questiontwo.titlequestion}
              firstQuestion={data.questiontwo.firstquestion}
              secondQuestion={data.questiontwo.secondquestion}
              thirdQuestion={data.questiontwo.thirdquestion}
              lastQuestion={data.questiontwo.lastquestion}
              correctAnswer={data.questiontwo.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.questionthree.titlequestion}
              firstQuestion={data.questionthree.firstquestion}
              secondQuestion={data.questionthree.secondquestion}
              thirdQuestion={data.questionthree.thirdquestion}
              lastQuestion={data.questionthree.lastquestion}
              correctAnswer={data.questionthree.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.questionfour.titlequestion}
              firstQuestion={data.questionfour.firstquestion}
              secondQuestion={data.questionfour.secondquestion}
              thirdQuestion={data.questionfour.thirdquestion}
              lastQuestion={data.questionfour.lastquestion}
              correctAnswer={data.questionfour.firstquestion}
            />
            <CustomCheckbox
              titleQuestion={data.questionfive.titlequestion}
              firstQuestion={data.questionfive.firstquestion}
              secondQuestion={data.questionfive.secondquestion}
              thirdQuestion={data.questionfive.thirdquestion}
              lastQuestion={data.questionfive.lastquestion}
              correctAnswer={data.questionfive.firstquestion}
            />
          </Answer>

          <div style={{display: 'flex', justifyContent: 'center'}}>
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
