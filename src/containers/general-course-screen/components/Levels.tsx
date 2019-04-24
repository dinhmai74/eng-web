import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import Chart from './Chart'
import LevelNumber from './LevelNumber'

interface IProps {}

interface IState {}
const Wrapper = styled.div`
  font-size: 16px;
  padding-left: 80px;
  padding-right: 80px;
  text-align: center;
`
const Description = styled.div`
  font-size: 20px;
`

const Courses = styled.div`
  background-color: ${colors.darkWhite};
  font-size: 12px;
`

const StyledHeader = styled.div`
  color: ${colors.lightBlue};
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 40px;
`
class Levels extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Courses>
        `
        <Wrapper>
          <StyledHeader>{tran('Levels')}</StyledHeader>
          <Description>{tran('descriptionLevel')}</Description>
        </Wrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            // backgroundColor: 'red',
            flexWrap: 'wrap'
          }}
        >
          <Chart name={'SURVIVAL'} color="#fbc3a2" number={10} />
          <Chart name={'WAYSTAGE'} color="#f58b7d" />
          <Chart name={'UPPER WAYSTAGE'} color="#ef2c3a" />
          <Chart name={'THRESHOLD'} color="#66c9dc" />
          <Chart name={'MILESTONE'} color="#009dba" />
          <Chart name={'MASTERY'} color="#153359" />
        </div>
      </Courses>
    )
  }
}

// LevelNumber.defaultProps = {}

export default Levels
