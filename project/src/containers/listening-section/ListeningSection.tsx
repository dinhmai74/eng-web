import {
  Container,
  Image,
  Section
} from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import * as React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  RouteComponentProps,
  withRouter
} from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes'
import { IRoute } from 'tools/routes'
export interface IGeneralCourseProps extends RouteComponentProps {
  /*** @property {propTypes.array} routes - display route */
  routes?: IRoute[]
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
const Containers = styled(Container)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: left;
  font-size: 18px;
`
const Title = styled.div`
  font-size: 30px !important;
  color: ${colors.lightCyan};
  padding-bottom: 20px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
`
const LisSection = styled.span`
  font-size: 22px !important;
  color: ${colors.darkBLue};
`
const SubSection = styled.span`
  font-size: 22px !important;
  color: ${colors.lightRed};
`
const Paragraph = styled.div`
  padding-bottom: 20px;
`
const Minutes = styled.span`
  font-size: 22px !important;
  color: ${colors.lightRed};
`
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
  padding-bottom: 50px;
`
export interface IGeneralCourseState {}

class ListeningSection extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  handleChange = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: '/listening-test-advanced'
        // search: 'name=jhon&amp;age=24'
      })
    }
  }
  render() {
    return (
      <Containers>
        <Title>INTRODUCTION</Title>
        <Paragraph>
          {tran('goingTo')} <LisSection>LISTENING SECTION.</LisSection>
        </Paragraph>
        <Paragraph>
          {tran('sectionInclues')} <SubSection>2 sub-sections</SubSection>
          {tran('total')}
          {tran('youHave')} <Minutes>8 minutes</Minutes>
          {tran('finish')}
          {tran('listen')}
        </Paragraph>
        <Paragraph>
          <Paragraph>{tran('section')}</Paragraph>
          <Paragraph>{tran('choice')}</Paragraph>
          <Paragraph>{tran('summary')}</Paragraph>
        </Paragraph>
        <StyledButton>
          <Button color="linkedin" onClick={this.handleChange}>
            {tran('startNow')}
          </Button>
        </StyledButton>
      </Containers>
    )
  }
}
export default withRouter(ListeningSection)
