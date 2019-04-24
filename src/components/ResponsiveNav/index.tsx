import 'App.css'
import 'bootstrap'
import React from 'react'
import { Link} from 'react-scroll'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { images } from 'themes'
import { strings } from 'tools'
import './button.scss'
import './style.scss'
import styled from 'styled-components'
import { IRoute } from 'tools/routes'

const Background = styled.div`
  position: absolute;
  z-index: -999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
`

interface IProps extends RouteComponentProps {
  /*** @property {propTypes.array} routes - display route */
  routes: IRoute[],
  /*** @property {propTypes.string} home icon - icon home display */
  homeIcon?: string,
  /*** @property {propTypes.string} hiddenRoute - list route that hide nav bar */
  hiddenRoute?: string[],
  /*** @property {propTypes.boolean} render One page - nav for one page or not */
  renderOnePage?: boolean,
}

interface IState {
  isToggled: boolean,
  isTop: boolean,
  bg: string,
  path: string
}

class ResponsiveNav extends React.Component<IProps, IState> {
  static defaultProps = {
    routes: [],
    homeIcon: images.logo,
    hiddenRoute: [],
    renderOnePage: false
  }

  state = {
    isToggled: false,
    isTop: true,
    bg: 'black',
    path: '/'
  }
  unlisten: any

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({isTop})
      }
    })

    this.setBg()
  }

  componentWillMount(): void {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({
        path: location.pathname
      })
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  setBg = () => {
    const {pathname} = this.props.location
    this.setState({
      path: pathname
    })
  }

  handleToggleButtonPress = (event: React.MouseEvent<HTMLElement>) => {
    this.setState((state: IState) => ({
      isToggled: !state.isToggled
    }))
  }

  renderRouteContent = (r) => {
    return (
      <span className="menu__title">
        <span className="menu__first-word" data-hover={r.first}>
          {r.first}
        </span>
        <span className="menu__second-word" data-hover={r.second}>
          {r.second}
        </span>
      </span>
    )
  }

  renderNormalNav = (routes) => {
    return routes.map((r) => {
      const routeContent = this.renderRouteContent(r)
      return (
        <li className={`menu__item`}>
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
    return routes.map((r) => {
      const routeContent = this.renderRouteContent(r)
      return (
        <li className={`menu__item`}>
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
    const {routes, renderOnePage} = this.props
    if (renderOnePage) {
      return this.renderOnePageNav(routes)
    }
    return this.renderNormalNav(routes)
  }

  render() {
    const {isToggled, isTop, bg, path} = this.state
    const {routes, homeIcon, hiddenRoute} = this.props
    if (hiddenRoute && hiddenRoute.includes(path)) {
      return null
    }

    const listItems = this.renderListRouteItems()

    return (
      <nav className="navigation navbar navbar-expand-lg fixed-top ">
        {(!isTop || path !== '/' || isToggled) && <Background/>}
        <Nav.Link
          key={strings.routeHome}
          as={NavLink}
          style={{marginLeft: 50}}
          exact
          to={strings.routeHome} className="navbar-brand"
        >
          <img src={homeIcon} width="30" height="30" alt=""/>
        </Nav.Link>

        <button
          className={`navbar-toggler e-button ${isToggled && 'open'}`}
          onClick={this.handleToggleButtonPress}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="e-burger">
            <span/>
            <span/>
            <span/>
            <span/>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav menu">
            {listItems}
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(ResponsiveNav)
