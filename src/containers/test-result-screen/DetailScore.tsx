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
  font-size: 16px;
  padding-top: 20px;
  flex-flow: row-wrap;
`
const Title = styled.div`
  font-size: 30px;
  text-align: center;
`

class DetailScores extends React.Component<any, any> {
  render() {
    const { point } = this.props
    if (point >= 0 && point <= 6) {
      return (
        <Container>
          <DetailScore color={colors.darkViolet}>
            <Title color={colors.darkViolet}>A1</Title>
            An ability to deal with simple, straightforward information and
            begin to express oneself in familiar contexts.
          </DetailScore>
        </Container>
      )
    } else if (point >= 7 && point <= 11) {
      return (
        <Container>
          <DetailScore color={colors.darkCyan}>
            {' '}
            <Title>A2</Title>
            An ability to deal with simple, straightforward information and
            begin to express oneself in familiar contexts.
          </DetailScore>
        </Container>
      )
    } else if (point >= 12 && point <= 16) {
      return (
        <Container>
          <DetailScore color={colors.lawnGreen}>
            {' '}
            <Title>B1</Title>
            An ability to deal with simple, straightforward information and
            begin to express oneself in familiar contexts.
          </DetailScore>
        </Container>
      )
    } else if (point >= 17 && point <= 20) {
      return (
        <Container>
          <DetailScore color={colors.yellow}>
            {' '}
            <Title>B2</Title>
            An ability to deal with simple, straightforward information and
            begin to express oneself in familiar contexts.
          </DetailScore>
        </Container>
      )
    } else if (point >= 21 && point <= 23) {
      return (
        <Container>
          <DetailScore color={colors.goldenRod}>
            {' '}
            <Title>C1</Title>
            An ability to deal with simple, straightforward information and
            begin to express oneself in familiar contexts.
          </DetailScore>
        </Container>
      )
    }
    return (
      <Container>
        <DetailScore color={colors.lightRed}>
          {' '}
          <Title>C2</Title>
          An ability to deal with simple, straightforward information and begin
          to express oneself in familiar contexts
        </DetailScore>
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
