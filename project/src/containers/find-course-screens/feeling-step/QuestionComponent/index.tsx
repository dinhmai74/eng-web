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
  onChange: (value: any) => void
  [rest: string]: any
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
  static defaultProps: {
    onChange: (value) => {};
  }

  constructor(props: IProps) {
    super(props)

    this.state = {
      isBlock1Selected: false,
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

  onBlock = (value) => {}

  onChange = (value: any) => {
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  render() {
    const answers: any = this.props.answers

    let valueA: any = null
    let pointA: any = null
    let valueB: any = null
    let pointB: any = null
    let valueC: any = null
    let pointC: any = null
    let valueD: any = null
    let pointD: any = null
    let valueE: any = null
    let pointE: any = null
    let valueF: any = null
    let pointF: any = null

    if (answers !== undefined) {
      if (answers.A !== undefined) {
        valueA = answers.A.value
        pointA = answers.A.point
      }
      if (answers.B !== undefined) {
        valueB = answers.B.value
        pointB = answers.B.point
      }
      if (answers.C !== undefined) {
        valueC = answers.C.value
        pointC = answers.C.point
      }
      if (answers.D !== undefined) {
        valueD = answers.D.value
        pointD = answers.D.point
      }
      if (answers.E !== undefined) {
        valueE = answers.E.value
        pointE = answers.E.point
      }
      if (answers.F !== undefined) {
        valueF = answers.F.value
        pointF = answers.F.point
      }
    }

    return (
      <GridContainer>
        <Block
          content={valueA}
          goNext={() => this.onChange(pointA)}
          onClickBlock={this.onBlock1Click}
          changeBackground={this.state.isBlock1Selected}
        />
        <Block
          content={valueB}
          goNext={() => this.onChange(pointB)}
          onClickBlock={this.onBlock2Click}
          changeBackground={this.state.isBlock2Selected}
        />
        <Block
          content={valueC}
          goNext={() => this.onChange(pointC)}
          onClickBlock={this.onBlock3Click}
          changeBackground={this.state.isBlock3Selected}
        />
        <Block
          content={valueD}
          goNext={() => this.onChange(pointD)}
          onClickBlock={this.onBlock4Click}
          changeBackground={this.state.isBlock4Selected}
        />
        <Block
          content={valueE}
          goNext={() => this.onChange(pointE)}
          onClickBlock={this.onBlock5Click}
          changeBackground={this.state.isBlock5Selected}
        />
        <Block
          content={valueF}
          goNext={() => this.onChange(pointF)}
          onClickBlock={this.onBlock6Click}
          changeBackground={this.state.isBlock6Selected}
        />
      </GridContainer>
    )
  }
}
