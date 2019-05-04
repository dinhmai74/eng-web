import { NavMargin } from 'components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import Block from './Block'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 20px;
  height: 50%;
`

export interface IProps {
  goNext: () => any
}

export interface IState {
  isBlock1Selected: boolean
  isBlock2Selected: boolean
  isBlock3Selected: boolean
  isBlock4Selected: boolean
  isBlock5Selected: boolean
  isBlock6Selected: boolean
}

export default class Question extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      isBlock1Selected: true,
      isBlock2Selected: false,
      isBlock3Selected: false,
      isBlock4Selected: false,
      isBlock5Selected: false,
      isBlock6Selected: false
    }
  }

  onBlock1Click = () => {
    this.setState({
      isBlock1Selected: true,
      isBlock2Selected: false,
      isBlock3Selected: false,
      isBlock4Selected: false,
      isBlock5Selected: false,
      isBlock6Selected: false
    })
  }

  onBlock2Click = () => {
    this.setState({
      isBlock1Selected: false,
      isBlock2Selected: true,
      isBlock3Selected: false,
      isBlock4Selected: false,
      isBlock5Selected: false,
      isBlock6Selected: false
    })
  }

  onBlock3Click = () => {
    this.setState({
      isBlock1Selected: false,
      isBlock2Selected: false,
      isBlock3Selected: true,
      isBlock4Selected: false,
      isBlock5Selected: false,
      isBlock6Selected: false
    })
  }

  onBlock4Click = () => {
    this.setState({
      isBlock1Selected: false,
      isBlock2Selected: false,
      isBlock3Selected: false,
      isBlock4Selected: true,
      isBlock5Selected: false,
      isBlock6Selected: false
    })
  }

  onBlock5Click = () => {
    this.setState({
      isBlock1Selected: false,
      isBlock2Selected: false,
      isBlock3Selected: false,
      isBlock4Selected: false,
      isBlock5Selected: true,
      isBlock6Selected: false
    })
  }

  onBlock6Click = () => {
    this.setState({
      isBlock1Selected: false,
      isBlock2Selected: false,
      isBlock3Selected: false,
      isBlock4Selected: false,
      isBlock5Selected: false,
      isBlock6Selected: true
    })
  }

  render() {
    return (
      <GridContainer>
        <Block
          content="Rat Ngai"
          goNext={this.props.goNext}
          onClickBlock={this.onBlock1Click}
          changeBackground={this.state.isBlock1Selected}
        />
        <Block
          content="Khong dien ta duoc y minh"
          goNext={this.props.goNext}
          onClickBlock={this.onBlock2Click}
          changeBackground={this.state.isBlock2Selected}
        />
        <Block
          content="Bi gioi han tu vung"
          goNext={this.props.goNext}
          onClickBlock={this.onBlock3Click}
          changeBackground={this.state.isBlock3Selected}
        />
        <Block
          content="Kha tu tin"
          goNext={this.props.goNext}
          onClickBlock={this.onBlock4Click}
          changeBackground={this.state.isBlock4Selected}
        />
        <Block
          content="Tu tin noi chuyen du co mac loi"
          goNext={this.props.goNext}
          onClickBlock={this.onBlock5Click}
          changeBackground={this.state.isBlock5Selected}
        />
        <Block
          content="Gan nhu troi chay"
          goNext={this.props.goNext}
          onClickBlock={this.onBlock6Click}
          changeBackground={this.state.isBlock6Selected}
        />
      </GridContainer>
    )
  }
}
