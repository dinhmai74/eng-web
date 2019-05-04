import { NavMargin } from 'components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
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

const Container = styled('div')`
  background-image: url(${images.bgFindCourse});
  height: 70vh;
  background-size: cover;
  display: flex;
  align-items: center;
`

interface IProps {
  style?: any

  [rest: string]: any

  goNext: () => void
}

interface IState {}

class FindCourseScreen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    const { style } = this.props
    return (
      <Container
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        style={style}
      >
        <Wrapper>
          <LogoImage src={images.logoFindCourse} />
          <Content> {tran('contentFinderCourse')}</Content>
          <Button onClick={this.props.goNext}>{tran('start')}</Button>
        </Wrapper>
      </Container>
    )
  }
}

FindCourseScreen.defaultProps = {}

export default FindCourseScreen
