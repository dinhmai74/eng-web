import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes/index'

interface IProps {}

interface IState {}

const NumberLevel = styled.div`
  height: 70px;
  margin-top: -10px;
  background-color: ${colors.transparentOrange};
  display: block;
  width: 15px;
  margin: 0 2px 0 4px;
  float: left;
  border-radius: 20px;
  /* width: 50%; */
`
const TextChart = styled.span`
  position: absolute;
  margin-top: -20px;
  margin-left: 1.5px;
  color: black;
`

class LevelNumber extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    const { style, ...rest } = this.props
    return (
      <NumberLevel style={style}>
        <TextChart>{this.props.number}</TextChart>
      </NumberLevel>
    )
  }
}

// LevelNumber.defaultProps = {}

export default LevelNumber
