import {
  Header,
  Hero,
  Image,
  Row,
  Column,
  Container,
  Section
} from '@front10/landing-page-book/dist/components'
import 'animate.css'
import { tran } from 'localization/i18n'
import { Flex, Box, Text } from 'rebass'
// tslint:disable-next-line:max-line-length
import CustomFlipNumber from 'containers/home-screen/components/ArchivedOverview/components/CustomFlipNumber/CustomFlipNumber'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes'

interface IProps {}

interface IState {}

const Wrapper = styled('div')`
  margin: 0 auto;
  padding: 30px 10px;
`

const Title = styled('h1')`
  text-align: center;
  font-size: 4em;
  margin: 20px auto;
`

class  ArchivedOverview extends Component<IProps, IState> {
  static defaultProps = {}
  state = {}

  render() {
    return (
      <Section title={tran('titleWhatWeHave')} bgColor={'light'}>
        <Container>
          <Row>
          <CustomFlipNumber numberVal={10} textVal={tran('experienceYears')} icon={'tasks'}/>
          <CustomFlipNumber numberVal={38} textVal={tran('territories')} icon={'globe'}/>
          <CustomFlipNumber numberVal={300} textVal={tran('centers')} icon={'building'}/>
          <CustomFlipNumber numberVal={3000000} textVal={tran('students')} icon={'student'}/>
          </Row>
        </Container>
      </Section>
    )
  }
}

export default ArchivedOverview
