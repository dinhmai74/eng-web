import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Introduction from './components/Introduction'
import MainMenu from './components/MainMenu'

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <MainMenu />

        <Introduction />
      </div>
    )
  }
}

export default HomeScreen
