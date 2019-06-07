import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import {
  Section,
  Container,
  Image,
  Button
} from '@front10/landing-page-book/dist/components'
import { connect } from 'react-redux'

export interface IGeneralCourseState {}
export interface IGeneralCourseProps {
  images1: string
  images2: string
  images3: string
}

const Scored = styled.div`
  font-weight: bold;
  font-size: 28px !important;
  text-align: center;
  padding-bottom: 20px;
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

class TestResult extends React.Component<
  any,
  IGeneralCourseState
> {
  static defaultProps = {
    checking: true
  }
  render() {
    const { images1, images2, images3, point } = this.props
    return (
      <Section>
        <Scored>{tran('scored')} {point}/5</Scored>
        <OptionTest>
          <p>{tran('anotherSKill')}</p>
          <StyledIcon>
            <Button>
              <Image src={images1} />
            </Button>
            <Button>
              <Image src={images2} />
            </Button>
            <Button>
              <Image src={images3} />
            </Button>
          </StyledIcon>
        </OptionTest>
      </Section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}
export default connect(mapStateToProps)(TestResult)
