import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
// import { Container } from 'react-bootstrap'
import FormInput, {
  IRegisterInputState,
} from '../../components/FormInput/FormInput'
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
} from '@front10/landing-page-book/dist/components'
import NewCourse from './NewCourse'
import FeedBack from './FeedBack'
import VideoCourse from './VideoCourse'
import { EmailHelper } from 'tools'
// export interface IGeneralCourseProps {}
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`
const Title = styled.div`
  text-align: center;
  background-color: #153a67;
  color: white;
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-left: 40px;
`
const StyleForm = styled.div`
  display: flex;
  justify-content: center;
`
const Containers = styled.div``
const Wrapper = styled.div``
export interface IGeneralCourseState {}
export default class StudentExperience extends React.Component<
  any,
  IGeneralCourseState
> {
  onSubmit = (state: IRegisterInputState) => {
    const { age, email, name, phone, place } = state
    EmailHelper.register({ age, email, name, phone, place })
    alert(tran('registerSuccess'))
  }

  render() {
    return (
      <Containers>
        <StyledImage src={images.bgStudentExperience} />
        <Title>
          {tran('registerCourse')}
          <br />
          {tran('nameWeb')}
        </Title>
        <StyleForm>
          <FormInput onSubmit={this.onSubmit} />
        </StyleForm>
        <NewCourse />
        <FeedBack />
        <VideoCourse />
      </Containers>
    )
  }
}
