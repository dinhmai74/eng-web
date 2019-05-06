import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import DetailScore from './DetailScore'
import CustomCheckbox from '../../components/Question/CustomCheckbox'
import { connect } from 'react-redux'

import {
  Header,
  Hero,
  Image,
  Row,
  Column,
  Container,
  Section,
  Paragraph,
  Card
} from '@front10/landing-page-book/dist/components'
const StyleSection = styled(Section)`
  /* background-image: url(${images.bgTestResult});
  background-size: cover; */
`
const StylePoint = styled.div`
  padding-left: 18px;
`
const StyleLevel = styled.div`
  padding-left: 18px;
`
const Wrapper = styled.div`
  /* color: ${colors.darkCyan}; */
`

// export interface IGeneralCourseProps {}

export interface IGeneralCourseState {}
class TestResult extends React.Component<any, IGeneralCourseState> {
  // constructor(props: IGeneralCourseProps) {
  //   super(props)

  //   this.state = {}
  // }
  render() {
    // console.log('this.props.point', this.props.point)
    const { point } = this.props
    return (
      <StyleSection title="Kết quả bài kiểm tra của bạn: ">
        <Container>
          <Row>
            <Column className="col-12 col-md-6">
              <Wrapper>
                <StylePoint>Point: {point}/25</StylePoint>
                <StyleLevel>Levels: </StyleLevel>
                <div>
                  <DetailScore />
                </div>
              </Wrapper>
            </Column>
            <Column className="col-12 col-md-6">
              <img src={images.chartScore} />
            </Column>
          </Row>
        </Container>
      </StyleSection>
    )
  }
}
// function mapStateToProps(state) {
//   return {
//     point: state.point,
//     // correctAnswer: state.correctAnswer
//   }
// }
// export default connect(mapStateToProps)(TestResult)
const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}
export default connect(mapStateToProps)(TestResult)
