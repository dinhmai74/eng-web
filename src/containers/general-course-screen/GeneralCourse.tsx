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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* padding: 40px; */
  flex: 1;
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
