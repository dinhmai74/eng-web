import {
  Card,
  Column,
  Container,
  Header,
  Hero,
  Image,
  Paragraph,
  Row,
  Section
} from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import Practice from './Practice'
import Tabs from './Tabs'
import Title from './Title'
const Introduction = styled.div`
  padding-bottom: 20px;
`
const Wrapper = styled.div``

export interface IGeneralCourseState {}
export default class FreeTests extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Container>
        <Introduction>
          <Title
            title={tran('titleIntroduction')}
            subTitle={tran('subTitleIntroduction')}
          />
          <Tabs />
        </Introduction>
        <Practice />
      </Container>
    )
  }
}
