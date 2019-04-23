import { InformationForm } from 'components'
import { ResponsiveNav } from 'components'
import ArchivedOverview from 'containers/home-screen/components/ArchivedOverview'
import WallStreetEnglish from 'containers/why-chose-us/wall-street-english'
import React, { Component } from 'react'
import styled from 'styled-components'
import Introduction from './components/Introduction'

const StyledIntro = styled(Introduction)`
 position: absolute;
 z-index: 99;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
`

class HomeScreen extends Component {
  render() {
    return (
      <>
         <StyledIntro />
         <WallStreetEnglish/>
         <ArchivedOverview/>
       </>
     )
   }
 }

export default HomeScreen
