import {
  Card,
  Column,
  Container,
  Header,
  Hero,
  Image,
  Paragraph,
  Row,
  Section
} from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
interface IProps {}

interface IState {}
const Wrapper = styled.div`
  display: flex;
  /* flex-flow: row wrap; */
  justify-content: center;
  align-items: center;
`
const StyledText = styled.div`
  text-align: left;
`
class Reason extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    const { style, icon } = this.props
    return (
      <Wrapper>
        <Image src={icon} />
        <StyledText>{this.props.text}</StyledText>
      </Wrapper>
    )
  }
}

export default Reason
