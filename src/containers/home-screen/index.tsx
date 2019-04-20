import { InformationForm } from 'components'
import { ResponsiveNav } from 'components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import Introduction from './components/Introduction'

const StyledInfoForm = styled(InformationForm)`
  margin: 20px 25%;
`

class HomeScreen extends Component {
  render() {
    return (
      <>
        <ResponsiveNav />
        <Introduction />
        <StyledInfoForm />
      </>
    )
  }
}

export default HomeScreen
