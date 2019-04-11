import 'bootstrap'
import React, { Component } from 'react'
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  Button,
  Dropdown,
  Header,
  Icon,
  Menu,
  MenuItemProps,
} from 'semantic-ui-react'

import { tran } from 'localization/i18n'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import { strings } from 'tools/index'
interface IState {
  activeItem: string | undefined
}

const StyledLink = styled(Link)`
  color: black
  :hover {
    color: black;
  }
`

interface IProps {}

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
    const { activeItem } = this.state

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainMenu
