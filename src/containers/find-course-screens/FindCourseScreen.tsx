import { NavMargin } from 'components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

interface IProps {}

interface IState {}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`
const LogoImage = styled.img`
  width: 25%;
`
const Content = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  color: ${colors.lightRed};
`
class FindCourseScreen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${images.bgFindCourse})`,
          height: '100%',
          backgroundSize: 'cover',
          paddingBottom: '40px'
        }}
      >
        <Wrapper>
          <LogoImage src={images.logoFindCourse} />
          <Content> {tran('contentFinderCourse')}</Content>
        </Wrapper>
      </div>
    )
  }
}

FindCourseScreen.defaultProps = {}

export default FindCourseScreen
