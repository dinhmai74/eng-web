import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
// import { Container } from 'react-bootstrap'
import FormInput from '../../components/FormInput/FormInput'
import {
  Header,
  Hero,
  Image,
  Row,
  Column,
  Section,
  Paragraph,
  Card,
  Video
} from '@front10/landing-page-book/dist/components'
import NewCourse from './NewCourse'
import FeedBack from './FeedBack'
import VideoCourse from './VideoCourse'
// export interface IGeneralCourseProps {}

const Container = styled(Section)`
  background-image: url(${images.bgVideo});
  height: 40vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
`
const Wrapper = styled.div`
  color: white;
`
const Title = styled.div`
  font-size: 18px;
`
const Question = styled.div`
  font-size: 35px;
  font-weight: bold;
`
export interface IGeneralCourseState {}
export default class VideoCourses extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>{tran('titleVideoCourse')}</Title>
          <Question>{tran('titleQuestionVideoCourse')}</Question>
        </Wrapper>
        <Video source="https://www.youtube.com/watch?time_continue=69&v=mS36oAYp9Aw" />
      </Container>
    )
  }
}
