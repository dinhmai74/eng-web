import "App.css"
import "bootstrap"
import { RightItems } from "components/ResponsiveNav/RightItems"
import i18n from "i18next"
import { tran } from "localization/i18n"
import React from "react"
import { Nav } from "react-bootstrap"
import Headroom from "react-headroom"
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom"
import { Link } from "react-scroll"
import { Button, Flag } from "semantic-ui-react"
import styled from "styled-components"
import { colors, images } from "themes"
import { strings } from "tools"
import { NavRoute } from "tools/routes"
import "./button.scss"
import "./style.scss"

const StyledFlag = styled(Flag)``

const StyledButton = styled(Button)`
  background: transparent;
  border: 1px solid ${colors.main};
`

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
`

interface IProps extends RouteComponentProps {
  /*** @property {propTypes.array} routes - display route */
  routes: NavRoute[]
  /*** @property {propTypes.string} home icon - icon home display */
  homeIcon?: string
  /*** @property {propTypes.string} hiddenRoute - list route that hide nav bar */
  hiddenRoute?: string[]
  /*** @property {propTypes.boolean} render One page - nav for one page or not */
  renderOnePage?: boolean
  /*** @property {propTypes.boolean} disable headroom- */
  disableHeadroom?: boolean

  [rest: string]: any
}

interface IState {
  isToggled: boolean
  isTop: boolean
  bg: string
  path: string
}

class ResponsiveNav extends React.Component<IProps, IState> {
  static defaultProps = {
    routes: [],
    homeIcon: images.logo,
    hiddenRoute: [],
    renderOnePage: false,
  }

  state = {
    isToggled: false,
    isTop: true,
    bg: "black",
    path: "/",
  }
  unlisten: any

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })

    this.setBg()
  }

  componentWillMount(): void {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({
        path: location.pathname,
      })
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  setBg = () => {
    const { pathname } = this.props.location
    this.setState({
      path: pathname,
    })
  }

  handleToggleButtonPress = (event: React.MouseEvent<HTMLElement>) => {
    this.setState((state: IState) => ({
      isToggled: !state.isToggled,
    }))
  }

  handleChangeLang = () => {
    const currentLang = i18n.language
    const newLang = currentLang === "en" ? "vi" : "en"
    i18n.changeLanguage(newLang, (err, t) => {
      if (err) {
        alert("something went wrong loading" + err)
      }
      i18n.reloadResources() // -> returns a Promise
    })
  }

  renderRouteContent = (r) => {
    return (
      <span className="menu__title">
        <span className="menu__first-word" data-hover={tran(r.first)}>
          {tran(r.first)}
        </span>
        <span className="menu__second-word" data-hover={tran(r.second)}>
          {tran(r.second)}
        </span>
      </span>
    )
  }

  renderNormalNav = (routes) => {
    return routes.map((r, i) => {
      const routeContent = this.renderRouteContent(r)
      return (
        <li className={`menu__item`} key={i}>
          <Nav.Link
            key={r.path}
            as={NavLink}
            activeClassName="menu__item--main"
            exact
            to={r.path}
            className="menu__link"
          >
            {routeContent}
          </Nav.Link>
        </li>
      )
    })
  }

  renderOnePageNav = (routes) => {
    return routes.map((r, i) => {
      const routeContent = this.renderRouteContent(r)
      return (
        <li className={`menu__item`} key={i}>
          <Link
            key={r.path}
            activeClass="menu__item--main"
            exact
            to={r.path}
            className="menu__link"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            {routeContent}
          </Link>
        </li>
      )
    })
  }

  renderListRouteItems = () => {
    const { routes, renderOnePage } = this.props
    if (renderOnePage) {
      return this.renderOnePageNav(routes)
    }
    return this.renderNormalNav(routes)
  }

  render() {
    const { isToggled, isTop, bg, path } = this.state
    const { routes, homeIcon, hiddenRoute, disableHeadroom, history } = this.props
    if (hiddenRoute && hiddenRoute.includes(path)) {
      return null
    }

    const listItems = this.renderListRouteItems()

    const fixTopNav = disableHeadroom ? "sticky-top" : null

    const currentLang = i18n.language
    const iconName = currentLang === "en" ? "gb" : "vn"

    return (
      <Headroom
        className={fixTopNav}
        style={{ background: "transparent", zIndex: 30 }}
        disable={disableHeadroom}
      >
        <nav className={`navigation navbar navbar-expand-lg`}>
          {(!isTop || path !== "/" || isToggled) && <Background />}
          <Nav.Link
            key={strings.routeHome}
            as={NavLink}
            style={{ marginLeft: 50 }}
            exact
            to={strings.routeHome}
            className="navbar-brand"
          >
            <img src={homeIcon} width="100" height="100" alt="logo" />
          </Nav.Link>

          <button
            className={`navbar-toggler e-button ${isToggled && "open"}`}
            onClick={this.handleToggleButtonPress}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="e-burger">
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
          <div className={`collapse navbar-collapse ${isToggled && "show"}`}>
            <ul className="navbar-nav menu">{listItems}</ul>
            <ul className="navbar-nav menu">
              <RightItems />
            </ul>
            <ul className="navbar-nav menu">
              <StyledButton color="yellow" basic onClick={this.handleChangeLang}>
                <StyledFlag name={iconName} />
              </StyledButton>
            </ul>
          </div>
        </nav>
      </Headroom>
    )
  }
}

export default withRouter(ResponsiveNav)
