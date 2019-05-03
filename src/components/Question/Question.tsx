import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import CustomCheckbox from './CustomCheckbox'
import data from './data/data.json'
import { colors } from 'themes'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { GeneralCourse } from 'containers';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  padding: 40px;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-left: 30px;
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

export interface IGeneralCourseProps {
  questionTitle: string
}
export interface IGeneralCourseState {}

export default class Question extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  constructor(props: IGeneralCourseProps) {
    super(props)

    this.state = {}
  }
  render() {
    // const { questionTitle } = this.props
    return (
      <Container>
        <Wrapper>
          <Answer>
            <CustomCheckbox
              questionTitle={data.questionone.titlequestion}
              firstQuestion={data.questionone.firstquestion}
              secondQuestion={data.questionone.secondquestion}
              thirdQuestion={data.questionone.thirdquestion}
              lastQuestion={data.questionone.lastquestion}
              correctAnswer={data.questionone.firstquestion}
            />
            <CustomCheckbox
              questionTitle={data.questiontwo.titlequestion}
              firstQuestion={data.questiontwo.firstquestion}
              secondQuestion={data.questiontwo.secondquestion}
              thirdQuestion={data.questiontwo.thirdquestion}
              lastQuestion={data.questiontwo.lastquestion}
              correctAnswer={data.questiontwo.firstquestion}
            />
            <CustomCheckbox
              questionTitle={data.questionthree.titlequestion}
              firstQuestion={data.questionthree.firstquestion}
              secondQuestion={data.questionthree.secondquestion}
              thirdQuestion={data.questionthree.thirdquestion}
              lastQuestion={data.questionthree.lastquestion}
              correctAnswer={data.questionthree.firstquestion}
            />
            <CustomCheckbox
              questionTitle={data.questionfour.titlequestion}
              firstQuestion={data.questionfour.firstquestion}
              secondQuestion={data.questionfour.secondquestion}
              thirdQuestion={data.questionfour.thirdquestion}
              lastQuestion={data.questionfour.lastquestion}
              correctAnswer={data.questionfour.firstquestion}
            />
            <CustomCheckbox
              questionTitle={data.questionfive.titlequestion}
              firstQuestion={data.questionfive.firstquestion}
              secondQuestion={data.questionfive.secondquestion}
              thirdQuestion={data.questionfive.thirdquestion}
              lastQuestion={data.questionfive.lastquestion}
              correctAnswer={data.questionfive.firstquestion}
            />
          </Answer>
          <Router>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/GeneralCourse/">
                <Button color="red">Submit</Button>
              </Link>
            </div>

            <Route path="/GeneralCourse/" component={GeneralCourse} />
          </Router>
        </Wrapper>
      </Container>
    )
  }
}
