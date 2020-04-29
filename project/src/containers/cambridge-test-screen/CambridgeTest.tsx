import { Container } from "@front10/landing-page-book/dist/components"
import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import styled from "styled-components"
import { images } from "themes"
import { NavRoute } from "tools/routes"
import Content from "./Content"
const Containers = styled(Container)``
const BackgroundImage = styled("div")`
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

export interface IGeneralCourseState {}
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
export default class CambridgeTest extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  render() {
    return (
      <Containers>
        <Wrapper>
          <BackgroundImage>
            <Content />
          </BackgroundImage>
        </Wrapper>
      </Containers>
    )
  }
}
