import { InformationForm } from 'components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import Introduction from './components/Introduction'
import MainMenu from './components/MainMenu'

const StyledInfoForm = styled(InformationForm)`
  margin: 20px 25%;
`

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <MainMenu />

        <Introduction />
        <StyledInfoForm />
      </div>
    )
  }
}

export default HomeScreen
