import AOS from 'aos'
import 'aos/dist/aos.css'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes/index'
AOS.init()
interface IProps {}

interface IState {}

const NumberLevel = styled.div`
  height: 70px;
  margin-top: -10px;
  background-color: ${(p) => p.color};
  display: block;
  width: 15px;
  margin: 0 2px 0 4px;
  float: left;
  border-radius: 20px;
`
const TextChart = styled.span`
  position: absolute;
  margin-top: -25px;
  margin-left: 1.5px;
  color: black;
`

class LevelNumber extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    const { style, color, ...rest } = this.props
    return (
      <NumberLevel
        style={style}
        color={color}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
        data-aos-anchor-placement="bottom-center"
      >
        <TextChart>{this.props.number}</TextChart>
      </NumberLevel>
    )
  }
}

// LevelNumber.defaultProps = {}
export default LevelNumber
