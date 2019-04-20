import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

interface IProps {}

interface IState {}

const Section = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 40px;
  /* flex-flow: wrap column; */
`

const Instruction = styled.div`
  color: white;
  margin-left: 20px;
  margin-top: 40px;
`
const StyledHeader = styled.h3`
  color: ${colors.lightBlue};
  font-size: 30px;
  margin-bottom: 20px;
`
const Content = styled.div`
  text-align: left;
  font-size: 20px;
  color: black;
  margin-right: 40px;
`
const StyleImage = styled.img`
  width: 100%;
  /* margin-right: px; */
`

class LevelNumber extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Section>
        <Instruction>
          <StyledHeader>{tran('Overview')}</StyledHeader>
          <Content>{tran('generalCoursesContent')}</Content>
        </Instruction>

        <StyleImage className="" src={images.general} />
      </Section>
    )
  }
}

// LevelNumber.defaultProps = {}

export default LevelNumber
