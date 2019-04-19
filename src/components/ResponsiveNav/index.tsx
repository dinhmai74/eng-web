import 'App.css'
import 'bootstrap'
import { tran } from 'localization/i18n'
import React from 'react'
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'
import { Text } from 'rebass'
import { strings } from 'tools'
import './button.scss'
import './style.scss'

interface IProps {}

interface IState {
  isToggled: boolean
}

class ResponsiveNav extends React.Component<IProps, IState> {
  state = {
    isToggled: false
  }

  handleToggleButtonPress = (event: React.MouseEvent<HTMLElement>) => {
    this.setState((state: IState) => ({
      isToggled: !state.isToggled
    }))
  }

  render() {
    const { isToggled } = this.state
    return (
      <nav className="navigation navbar navbar-expand-lg">
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
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav menu">
            <li className="menu__item menu__item--main nav-item">
              <a href={strings.routeHome} className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover="Home">
                    Home
                  </span>
                  <span className="menu__second-word" data-hover="Page">
                    Page
                  </span>
                </span>
              </a>
            </li>

            <li className="menu__item nav-item">
              <a href={strings.routeReasonChoseUs} className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover={tran('about')}>
                    {tran('about')}
                  </span>
                  <span
                    className="menu__second-word"
                    data-hover={tran('us')}
                  >
                    {tran('us')}
                  </span>
                </span>
              </a>
            </li>

            {/* find course */}
            <li className="menu__item nav-item">
              <a href={strings.routeFindCourse} className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover={tran('find')}>
                    {tran('find')}
                  </span>
                  <span
                    className="menu__second-word"
                    data-hover={tran('course')}
                  >
                    {tran('course')}
                  </span>
                </span>
              </a>
            </li>

            <li className="menu__item nav-item">
              <a href={strings.routeTest} className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover={tran('free')}>
                    {tran('free')}
                  </span>
                  <span
                    className="menu__second-word"
                    data-hover={tran('tests')}
                  >
                    {tran('tests')}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default ResponsiveNav
