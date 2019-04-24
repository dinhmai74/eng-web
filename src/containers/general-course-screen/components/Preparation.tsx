import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

interface IProps {}

interface IState {}
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
`
const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  flex: 1;
`
const Title = styled.div`
  font-size: 30px;
  color: ${colors.lightBlue};
  font-weight: bold;
  margin-bottom: 20px;
`
const Image = styled.img`
  margin-right: -20px;
  width: 100%;
  height: auto;
`
const TitleDescription = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`
const Dot = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: ${colors.darkGrays};
  border-radius: 50px;
  margin-right: 10px;
`
const Link = styled.a`
  color: ${colors.lightRed};
`
class Preparation extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    const { style, ...rest } = this.props
    return (
      <Container style={{ backgroundColor: '#fafafa' }}>
        <Wrapper>
          <Content>
            <Title>{tran('titlePreparation')}</Title>
            <TitleDescription>{tran('titleDescription')}</TitleDescription>
            <TitleDescription>
              <Dot />
              {tran('titleDescriptionCircle1')}
            </TitleDescription>
            <TitleDescription>
              <Dot />
              {tran('titleDescriptionCircle2')}
            </TitleDescription>
            <Link href=" " target="_blank">
              {tran('forwardLink')}
            </Link>
          </Content>
          <div style={{ marginRight: '-15px' }}>
            <Image src={images.preparation} />
          </div>
        </Wrapper>
      </Container>
    )
  }
}

// LevelNumber.defaultProps = {}

export default Preparation
