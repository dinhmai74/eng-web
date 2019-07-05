import * as React from 'react'
import styled from 'styled-components'
import { images } from 'themes'

import Content from './Content'
import { Container } from '@front10/landing-page-book/dist/components'

const BackgroundImage = styled('div')`
  background-image: url(${images.bgIeltsTest});
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Wrapper = styled.div`
  padding-top: 30px;
`

export interface IGeneralCourseState {}
export interface IGeneralCourseProps {}
export default class IntroductionIeltsTest extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Container>
        <Wrapper>
          <BackgroundImage>
            <Content />
          </BackgroundImage>
        </Wrapper>
      </Container>
    )
  }
}
