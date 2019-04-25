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
  height: 75vh;
  background-size: cover;
  display: flex;
  align-items: center;
`

interface IProps {
  style?: any

  [rest: string]: any

  goNext: () => void
}

interface IState {
}

class FindCourseScreen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    const {style} = this.props
    return (
      <Container style={style}>
        <Wrapper>
          <LogoImage src={images.logoFindCourse}/>
          <Content> {tran('contentFinderCourse')}</Content>
          <Button onClick={this.props.goNext}>{tran('start')}</Button>
        </Wrapper>
      </Container>
    )
  }
}

FindCourseScreen.defaultProps = {}

export default FindCourseScreen
