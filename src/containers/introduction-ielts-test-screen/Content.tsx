import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { images } from 'themes'
import { Section } from '@front10/landing-page-book/dist/components'
import { Button, Icon } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { IRoute } from 'tools/routes'
import OptionalTest from './OptionalTest'

const Wrapper = styled(Section)`
  padding-top: 40px;
  padding-bottom: 70px;
  padding-left: 60px;
  color: white;
`
const Title = styled.h1`
  font-size: 39px !important;
  font-weight: bold;
`
const Detail = styled.div`
  font-size: 13px !important;
  line-height: 20px;
`
const Guide = styled.p`
  padding-top: 20px;
`
const Introduction = styled.p`
  font-size: 13px !important;
  line-height: 20px;
`

export interface IGeneralCourseState {}
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
export default class Content extends React.Component<any, IGeneralCourseState> {
  onChanges = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: '/cambridge-test'
        // search: 'name=jhon&amp;age=24'
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>
          {tran('ieltsTest')}
          <br />
          {tran('forBeginner')}
        </Title>
        <Detail>
          {tran('detailIntroTest1')}
          <br />
          {tran('detailIntroTest2')}
          <br />
          {tran('detailIntroTest3')}
        </Detail>
        <Guide> {tran('guide')}</Guide>

        <Introduction>
          {tran('structrure')}
          <br />
          {tran('optional')}
          <br />
          {tran('evaluating')}
          <br />
          {tran('chooseSkill')}
        </Introduction>
        <OptionalTest />
        <br />
      </Wrapper>
    )
  }
}
