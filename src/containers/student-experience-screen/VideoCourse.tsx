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
  Container,
  Paragraph,
  Card,
  Video
} from '@front10/landing-page-book/dist/components'
import NewCourse from './NewCourse'
import FeedBack from './FeedBack'
import VideoCourse from './VideoCourse'
// export interface IGeneralCourseProps {}

const Containers = styled.div`
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
      <Containers>
        <Wrapper>
          <Title>DO YOU WANT TO KNOW NEW LEARNING PROGRAM</Title>
          <Question>How realistic will it be?</Question>
        </Wrapper>
        <Video source="https://www.youtube.com/watch?time_continue=69&v=mS36oAYp9Aw" />
      </Containers>
    )
  }
}
