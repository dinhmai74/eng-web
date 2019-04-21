import { InformationForm } from 'components'
import { ResponsiveNav } from 'components'
import ArchivedOverview from 'containers/home-screen/components/ArchivedOverview'
import React, { Component } from 'react'
import styled from 'styled-components'
import Introduction from './components/Introduction'

class HomeScreen extends Component {
  render() {
    return (
      <>
        <ResponsiveNav />
        <Introduction />
        <ArchivedOverview/>
      </>
    )
  }
}

export default HomeScreen
