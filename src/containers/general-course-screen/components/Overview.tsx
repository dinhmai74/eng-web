import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

interface IProps {}

interface IState {}

const Section = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  padding-top: 40px;
  padding-left: 40px;
`

const Instruction = styled.div`
  flex: 1;
  padding-right: 80px;
`
const StyledHeader = styled.h3`
  color: ${colors.lightBlue};
  font-size: 25px;
`
const Content = styled.div`
  text-align: left;
  font-size: 18px;
  color: black;
  margin-right: 20px;
`
const StyleImage = styled.img`
  width: 100%;
  height: auto;
`

class LevelNumber extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <Container>
        <Section className="">
          <Instruction>
            <StyledHeader>{tran('Overview')}</StyledHeader>
            <Content>{tran('generalCoursesContent')}</Content>
          </Instruction>
          <div style={{ marginRight: '-15px' }}>
            <StyleImage className="" src={images.general} />
          </div>
        </Section>
      </Container>
    )
  }
}

// LevelNumber.defaultProps = {}

export default LevelNumber
