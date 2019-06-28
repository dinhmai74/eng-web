import CerBlock from 'components/CerBlock'
import { tran } from 'localization/i18n'
import { Container } from '@front10/landing-page-book/dist/components'
import { IFindCourseFormValues } from '../FindCourseScreens'
import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`

const Header = styled.div`
  background-color: #003264;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
`

const ContainerS = styled(Container)`
  border-radius: 10px;
  background-color: #002850;
  color: white;
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const P = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`

const ContainerImage = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 50px;
`

// interface IState {
//   value: IFindCourseFormValues
// }

export interface IProps {
  location: {
    state: IState;
    [rest: string]: any;
  }
}

export interface IState {
  value: IFindCourseFormValues
}

export default class Result extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      value: {
        career: '',
        firstName: '',
        pill_name: '',
        question_1: 0,
        question_2: 0,
        question_3: 0
      }
    }
  }

  renderImage = () => {
    const career = this.props.location.state.value.career
    if (career === 'study') {
    } else if (career === 'business') {
      return <img src={images.business} />
    } else if (career === 'career') {
      return <img src={images.career} />
    } else if (career === 'travel') {
      return <img src={images.travel} />
    }
  }

  render() {
    const value = this.props.location.state.value
    const point = value.question_1 + value.question_2 + value.question_3

    let level = ''

    if (point <= 0) {
      level = 'A1'
    } else if (point > 0 && point <= 3) {
      level = 'A2'
    } else if (point > 4 && point <= 5) {
      level = 'B1'
    } else if (point > 5 && point <= 6) {
      level = 'B2'
    } else if (point > 6 && point <= 7) {
      level = 'C1'
    } else if (point > 7 && point <= 8) {
      level = 'C2'
    }

    return (
      <ContainerS>
        <Header>
          <h2>Hi</h2>
          <h2>We have found the right course for you!</h2>
        </Header>
        <FlexContainer>
          <ContainerImage>{this.renderImage()}</ContainerImage>
          <div style={{ width: '60%' }}>
            <h2>ENGLISH FIT {value.career.toUpperCase()}</h2>
          </div>
        </FlexContainer>
        <H2>YOUR ENGLISH LEVEL: {level}</H2>
      </ContainerS>
    )
  }
}
