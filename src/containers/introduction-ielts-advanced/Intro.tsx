import * as React from 'react'
import styled from 'styled-components'
import { images, } from 'themes'

import Content from './Content'
import { Container, Image } from '@front10/landing-page-book/dist/components'

const StyleImaged = styled.div`
  /* background-image: url(${images.newLogo}); */
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 100px;
`
const Wrapper = styled.div`
  padding-top: 30px;
`

export interface IGeneralCourseState {}
export interface IGeneralCourseProps {}
export default class Intro extends React.Component<any, IGeneralCourseState> {
  render() {
    return (
      <Container>
        <Wrapper>
          <StyleImaged>
            <Image src={images.newLogo} />
            <Image src={images.ieltsLevel} />
          </StyleImaged>
          <Content />
        </Wrapper>
      </Container>
    )
  }
}
