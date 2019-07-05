import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import {
  Section,
  Container,
  Image,
  Button
} from '@front10/landing-page-book/dist/components'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { IRoute } from 'tools/routes'

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
  images1: string
  images2: string
  images3: string
}

const Scored = styled.div`
  font-weight: bold;
  font-size: 28px !important;
  text-align: center;
  padding-bottom: 20px;
`
const OptionTest = styled.div`
  border: dashed 1px;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px !important;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 50vw;
  text-align: center;
  align-items: center;
`
const StyledIcon = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

class TestResult extends React.Component<any, IGeneralCourseState> {
  static defaultProps = {
    checking: true
  }
  onChange1 = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: this.props.url1
      })
      if (this.props.point !== 0) {
        this.props.dispatch({ type: 'RESET_POINT' })
      }
    }
  }
  onChange2 = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: this.props.url2
      })
      if (this.props.point !== 0) {
        this.props.dispatch({ type: 'RESET_POINT' })
      }
    }
  }
  onChange3 = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: this.props.url3
      })
      if (this.props.point !== 0) {
        this.props.dispatch({ type: 'RESET_POINT' })
      }
    }
  }
  render() {
    const { images1, images2, images3, point } = this.props
    return (
      <Section>
        <Scored>
          {tran('scored')} {point}/5
        </Scored>
        <OptionTest>
          <p>{tran('anotherSKill')}</p>
          <StyledIcon>
            <Button onClick={this.onChange1}>
              <Image src={images1} />
            </Button>
            <Button onClick={this.onChange2}>
              <Image src={images2} />
            </Button>
            <Button onClick={this.onChange3}>
              <Image src={images3} />
            </Button>
          </StyledIcon>
        </OptionTest>
      </Section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}
// export default connect(mapStateToProps)(TestResult)
// export  withRouter(FinalStep)

const enhance = compose(
  withRouter,
  // withStyles(styles, 'some style'),
  connect(mapStateToProps)
)

export default enhance(TestResult)
