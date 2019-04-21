import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'

interface IProps {}

interface IState {}
import { colors, images } from 'themes/index'
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: block;
  margin: auto;
  margin-top: 40px;
  width: 30%;
`
const LogoImage = styled.img`
  width: 80%;
`
const Content = styled.p`
  font-size: 20px;
  text-align: center;
  margin-left: -100px;
  margin-top: 10px;
  color: ${colors.lightRed};
`
class FindCourseScreen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}
  render() {
    return (
      <div>
        <img src={images.bgFindCourse} />
        <Wrapper>
          <LogoImage src={images.logoFindCourse} />
          <Content> {tran('ContentFinderCourse')}</Content>
        </Wrapper>
      </div>
    )
  }
}

FindCourseScreen.defaultProps = {}

export default FindCourseScreen
