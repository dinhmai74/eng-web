import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import {
  Header,
  Hero,
  Image,
  Row,
  Column,
  Section,
  Container,
  Paragraph,
  Card
} from '@front10/landing-page-book/dist/components'
import Title from './Title'
import Tabs from './Tabs'
import Practice from './Practice'
const Introduction = styled.div``
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
