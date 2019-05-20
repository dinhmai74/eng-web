import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { images } from 'themes'
import {
  Header,
  Hero,
  Image,
  Row,
  Column,
  Section,
  Container,
  Paragraph,
  Card
} from '@front10/landing-page-book/dist/components'
import { Button, Icon } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { IRoute } from 'tools/routes'

const Containers = styled(Container)``
const BackgroundImage = styled('div')`
  background-image: url(${images.bgCambridge});
  height: 80vh;
  background-size: cover;
  /* background-size: contain; */
  background-position: center;
  background-repeat: no-repeat;
`
const Wrapper = styled.div`
  padding-top: 30px;
`
const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 70px;
  padding-left: 60px;
  width: 50%;
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
export default class CambridgeTest extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
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
      <Containers>
        <Wrapper>
          <BackgroundImage>
            <Content>
              <Title>
                {tran('qualification')}
                <br />
                {tran('englishStandard')}
              </Title>
              <Detail>{tran('detailStandard')}</Detail>
              <p> {tran('guide')}</p>

              <p>
                {tran('totalQuestion')}
                <br />
                {tran('binding')}
                <br />
                {tran('evaluating')}
              </p>
              <Button color="youtube" onClick={this.onChanges}>
                {tran('startImmediately')}
              </Button>
            </Content>
          </BackgroundImage>
        </Wrapper>
      </Containers>
    )
  }
}
