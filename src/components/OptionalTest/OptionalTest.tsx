import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import { Container } from '@front10/landing-page-book/dist/components'
import Button from '@material-ui/core/Button'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { IRoute } from 'tools/routes'

export interface IGeneralCourseState {}
const Containers = styled.div`
  padding-right: 30px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 284px;
`
const Title = styled.div`
  display: flex;
  /* flex-flow: row wrap; */
  justify-content: center;
  background: #f4f7f1;
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  width: 280px;
  text-align: left;
`
const StyledImage = styled.img`
  margin-right: 10px;
`
const Introduction = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  text-align: center;
  font-style: italic;
  padding-top: 20px;
`
export interface IGeneralCourseProps extends RouteComponentProps {
  images: string
  title: string
  detail: string
  subDetail: string
  url: string
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

class FreeTests extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  onChanges = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: this.props.url
        // search: 'name=jhon&amp;age=24'
      })
    }
  }
  render() {
    return (
      <Containers>
        <Wrapper>
          <Title>
            <StyledImage src={this.props.images} />
            <div>{this.props.title}</div>
          </Title>
          <Introduction>
            <div>{this.props.detail}</div>
            <div style={{ paddingBottom: '30px' }}>{this.props.subDetail}</div>
          </Introduction>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.onChanges}
          >
            Kiểm Tra Ngay
          </Button>
        </Wrapper>
      </Containers>
    )
  }
}
export default withRouter(FreeTests)
