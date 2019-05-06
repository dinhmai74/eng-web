import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import { Container } from 'react-bootstrap'
import LevelNumber from 'containers/general-course-screen/components/LevelNumber'
import { connect } from 'react-redux'
// import TestResult from './TestResult'

const DetailScore = styled.div`
  background-color: ${(p) => p.color};
`

class DetailScores extends React.Component<any, any> {
  render() {
    const { point } = this.props
    console.log('pointttttt:', point)
    if (point >= 0 && point <= 6) {
      return (
        <Container>
          <DetailScore color={colors.darkViolet}>A1</DetailScore>
        </Container>
      )
    } else if (point >= 7 && point <= 11) {
      return (
        <Container>
          <DetailScore color={colors.darkCyan}>A2</DetailScore>
        </Container>
      )
    } else if (point >= 12 && point <= 16) {
      return (
        <Container>
          <DetailScore color={colors.lawnGreen}>B1</DetailScore>
        </Container>
      )
    } else if (point >= 17 && point <= 20) {
      return (
        <Container>
          <DetailScore color={colors.yellow}>B2</DetailScore>
        </Container>
      )
    } else if (point >= 21 && point <= 23) {
      return (
        <Container>
          <DetailScore color={colors.goldenRod}>C1</DetailScore>
        </Container>
      )
    }
    return (
      <Container>
        <DetailScore color={colors.lightRed}>C2</DetailScore>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(DetailScores)
