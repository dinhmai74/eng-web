import { Section } from "@front10/landing-page-book/dist/components"
import { tran } from "localization/i18n"
import React, { Component } from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { Button } from "semantic-ui-react"
import styled from "styled-components"
import { colors } from "themes"
import { NavRoute } from "tools/routes"
import Text from "./Text"
export interface IGeneralCourseProps extends RouteComponentProps {
  /*** @property {propTypes.array} routes - display route */
  routes?: NavRoute[]
  /*** @property {propTypes.string} home icon - icon home display */
  homeIcon?: string
  /*** @property {propTypes.string} hiddenRoute - list route that hide nav bar */
  hiddenRoute?: string[]
  /*** @property {propTypes.boolean} render One page - nav for one page or not */
  renderOnePage?: boolean
  /*** @property {propTypes.boolean} disable headroom- */
  disableHeadroom?: boolean
  history: any
}
interface IState {}

const Border = styled.div`
  border: 5px solid #c5c5c5;
  padding: 15px;
`
const StyledText = styled.div`
  padding-top: 10px;
`
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
`
class FinalStep extends Component<IGeneralCourseProps, IState> {
  static defaultProps: {}
  state = {}
  handleChange = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: "/listening-test-advanced-part2",
        // search: 'name=jhon&amp;age=24'
      })
    }
  }
  render() {
    return (
      <Section
        bgColor={colors.lightRed}
        title={"Question 4-9"}
        titleStyle={{ fontSize: "22px !important" }}
        subTitle={
          "Complete the form below, using NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer."
        }
        subTitleStyle={{ fontSize: "22px" }}
      >
        <Border>
          <Text
            content1={"1. There is no need to "}
            content2={" lots of people.  "}
            correctAnswer={"join"}
          />
          <Text
            content1={"2.. Pay attention to the    "}
            content2={" of the final report   "}
            correctAnswer={"content"}
          />
          <Text
            content1={"3. Prepare  "}
            content2={"  one for the teacher, another for the students themselves.   "}
            correctAnswer={"carefully"}
          />
          <Text
            content1={" 4. The deadline of the final paper is "}
            content2={" "}
            correctAnswer={"tomorrow"}
          />
          <Text
            content1={"5.The students can  "}
            content2={"their topics before the beginning of Aoril.   "}
            correctAnswer={"complete"}
          />
        </Border>
        <StyledButton>
          <Button color="linkedin" onClick={this.handleChange}>
            {tran("Next")}
          </Button>
        </StyledButton>
      </Section>
    )
  }
}

export default withRouter(FinalStep)
