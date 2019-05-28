import { InformationForm } from 'components'
import { ResponsiveNav } from 'components'
import ArchivedOverview from 'containers/home-screen/components/ArchivedOverview'
import TeamMember from 'containers/home-screen/components/TeamMember'
import WallStreetEnglish from 'containers/why-chose-us/wall-street-english'
import React, { Component } from 'react'
import styled from 'styled-components'
import Introduction from './components/Introduction'
import CourseGeneral from './components/CourseGeneral'

const IntroStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0
}

const Tracker = styled('div')`
  min-height: 100vh;
`

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Introduction style={IntroStyle}/>
        <Tracker/>
        <WallStreetEnglish/>
        <CourseGeneral/>
        <ArchivedOverview/>
        <TeamMember/>
      </div>
    )
  }
}

export default HomeScreen
