import { tran } from 'localization/i18n'
import * as React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import Levels from './components/Levels'
import Overview from './components/Overview'
import Preparation from './components/Preparation'

const Wrapper = styled.div`
  /* margin-right: auto;
  margin-left: auto; */
  /* padding: 40px; */
  flex: 1;
  /* background-color: red; */
`
export interface IGeneralCourseProps {}

export interface IGeneralCourseState {}

export default class GeneralCourse extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  constructor(props: IGeneralCourseProps) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <Overview />
          <Levels />
          <Preparation />
        </Wrapper>
      </Container>
    )
  }
}
