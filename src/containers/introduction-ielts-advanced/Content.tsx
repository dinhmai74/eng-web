import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { images, colors } from 'themes'
import {
  Section,
  Container,
  Image
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
  /* text-align: left; */
  font-size: 18px;
`
const Detail = styled.div`
  /* text-align: left; */
  /* background-color: red; */
  padding-left: 24%;
  padding-top: 10px;
`
const Ielts = styled.span`
  color: ${colors.lightRed};
  padding-right: 3px;
`
const Paragraph = styled.div`
  padding-bottom: 20px;
`
const Ready = styled.div`
  color: ${colors.lightRed};
  font-size: 22px !important;
  padding-bottom: 30px;
`
const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`
const WrapperText = styled.div``
export interface IGeneralCourseState {}
class Content extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  handleChange = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: '/listening-section-test'
        // search: 'name=jhon&amp;age=24'
      })
    }
  }
  render() {
    return (
      <Containers>
        <Paragraph>
          {tran('practice')} <Ielts>IELTS</Ielts>
          {tran('sampleTest')}
        </Paragraph>
        <WrapperText>
          <div>{tran('designedTo')}</div>
          <Detail>
            <div>
              <Image src={images.iconLi} />
              {tran('discover')}
            </div>
            <div>
              <Image src={images.iconLi} />
              {tran('conditions')}
            </div>
            <div />
          </Detail>
        </WrapperText>
        <Wrapper>
          <Ready>{tran('areyouReady')}</Ready>
          <Button color="linkedin" onClick={this.handleChange}>
            {tran('startNow')}
          </Button>
        </Wrapper>
      </Containers>
    )
  }
}
export default withRouter(Content)
