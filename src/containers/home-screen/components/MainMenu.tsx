import 'bootstrap'
import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MenuItemProps } from 'semantic-ui-react'
import styled from 'styled-components'

import { tran } from 'localization/i18n'
import NavLink from 'react-bootstrap/NavLink'
import { strings } from 'tools/index'
interface IState {
  activeItem: string | undefined
}

interface IProps {}

const StyledNavbar = styled(Navbar)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

class MainMenu extends Component<IProps, IState> {
  state = {
    activeItem: 'editorials',
  }

  handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps,
  ): void => {
    const { name } = data
    this.setState({ activeItem: name })
  }

  render() {
    return (
      <StyledNavbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* drops down why chose us */}
          <Nav className="mr-auto">
            <NavDropdown title={tran('whyChooseUs')} id="basic-nav-dropdown">
              <NavDropdown.Item href={strings.routeReasonChoseUs}>
                {tran('reasonChooseUs')}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            {/* free test */}
            <NavItem>
              <NavLink href={strings.routeTest}>{tran('freeTest')} </NavLink>
            </NavItem>

            {/* find courses */}
            <NavItem>
              <NavLink href={strings.routeFindCourse}>
                {tran('findCourses')}{' '}
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    )
  }
}

export default MainMenu
