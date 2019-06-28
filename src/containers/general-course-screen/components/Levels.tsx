import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import Chart from './Chart'
import LevelNumber from './LevelNumber'

interface IProps {}

interface IState {}
const Wrapper = styled.div`
  font-size: 18px;
  padding-left: 160px;
  padding-right: 160px;
  text-align: center;
`
const Description = styled.div`
  font-size: 18px;
`

const Courses = styled.div`
  background-color: ${colors.darkWhite};
`

const StyledHeader = styled.div`
  color: ${colors.lightBlue};
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 40px;
`
const ListChart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
class Levels extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Courses>
        <Wrapper>
          <StyledHeader>{tran('Levels')}</StyledHeader>
          <Description>{tran('descriptionLevel')}</Description>
        </Wrapper>
        <ListChart>
          <Chart name={'SURVIVAL'} />
          <Chart name={'WAYSTAGE'} />
          <Chart name={'UPPER WAYSTAGE'} />
          <Chart name={'THRESHOLD'} />
          <Chart name={'MILESTONE'} />
          <Chart name={'MASTERY'} />
        </ListChart>
      </Courses>
    )
  }
}
// LevelNumber.defaultProps = {}
export default Levels
