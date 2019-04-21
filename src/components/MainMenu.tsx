import React, { Component } from 'react'
import { Menu as SemanticMenu, MenuItemProps } from 'semantic-ui-react'

interface IState {
  activeItem: string | undefined
}

export class MainMenu extends Component<typeof SemanticMenu, IState> {
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
      <SemanticMenu>
        <SemanticMenu.Item
          name="editorials"
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        />
        <SemanticMenu.Item
          name="reviews"
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        />
        <SemanticMenu.Item
          name="upcomingEvents"
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        />
      </SemanticMenu>
    )
  }
}

export default MainMenu
