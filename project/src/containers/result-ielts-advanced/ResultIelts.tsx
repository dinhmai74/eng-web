import {
  Button,
  Container,
  Image,
  Section
} from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

export interface IGeneralCourseState {}
export interface IGeneralCourseProps {
  images1: string
  images2: string
  images3: string
}

const Scored = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`
const OptionTest = styled.div`
  border: dashed 1px;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px !important;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 50vw;
  text-align: center;
  align-items: center;
`
const StyledIcon = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`
const Wrapper = styled.div`
  border: 2px solid #007ba5;
  border-radius: 12px;
  font-weight: bold;
  font-size: 22px !important;
  text-align: center;
  padding-bottom: 20px;
`
const StyleImaged = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`
const DetailScored = styled.div`
  padding-bottom: 10px;
`

class ResultIelts extends React.Component<any, IGeneralCourseState> {
  static defaultProps = {
    checking: true
  }
  render() {
    const { point } = this.props
    return (
      <Section>
        <StyleImaged>
          <Image src={images.bgResult} />
        </StyleImaged>

        <Wrapper>
          <Scored>
            <Scored>
              {tran('scored')} {point / 2}/9.0
            </Scored>
            <DetailScored>({point}/20)</DetailScored>
          </Scored>
        </Wrapper>
      </Section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}
export default connect(mapStateToProps)(ResultIelts)
