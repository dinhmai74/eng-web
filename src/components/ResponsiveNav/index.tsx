import 'App.css'
import 'bootstrap'
import { tran } from 'localization/i18n'
import React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Text } from 'rebass'
import { strings } from 'tools'
import './button.scss'
import './style.scss'
import { routes } from 'tools/routes'
import styled from 'styled-components'

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
}

interface IState {
  isToggled: boolean,
  isTop: boolean,
  bg: string,
  path: string
}

class ResponsiveNav extends React.Component<IProps, IState> {
  static defaultProps = {
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
        this.setState({ isTop })
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

  render() {
    const {isToggled, isTop, bg, path} = this.state
    return (
      <nav className="navigation navbar navbar-expand-lg fixed-top " >
        {(!isTop || path !== '/') && <Background/>}
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
            {
              routes.map((r) => (
                <li className={`menu__item 'menu__item--main'} `}>
                  <Nav.Link
                    key={r.path}
                    as={NavLink}
                    activeClassName="menu__item--main"
                    exact
                    to={r.path} className="menu__link"
                  >
                    <span className="menu__title">
                  <span className="menu__first-word" data-hover={r.first}>
                    {r.first}
                  </span>
                  <span className="menu__second-word" data-hover={r.second}>
                    {r.second}
                  </span>
                </span>
                  </Nav.Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(ResponsiveNav)
