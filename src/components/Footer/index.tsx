import Column, { IContent } from 'components/Footer/Column'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import {
  Hero,
  Footer as HeroFooter,
  Row,
} from '@front10/landing-page-book/dist/components'
import { Flex } from 'rebass'
import styled from 'styled-components'
import { colors } from 'themes'
import { strings } from 'tools'

const Wrapper = styled(HeroFooter)`
display: flex;
flex-direction: row;
  border-top: 1px solid ${colors.border};
  margin: 10px;
  justify-content: space-around;
  min-height: 35vh;
  background: ${colors.bgSecondary};
`

const LearningEnglishColumn: IContent[] = [
  {
    text: tran('titleReasonChoseUs'),
    href: strings.routeWhyChoseUs
  },
  {
    text: tran('generalCourse'),
    href: strings.routeGeneralCourse
  },
]

const TestColumn: IContent[] = [
  {
    text: tran('normalTest'),
    href: strings.routeTest
  },
]

interface IProps {}
interface IState {}

class Footer extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Wrapper bgColor={colors.bgSecondary}>
          <Column title={tran('fTitleLearnEnglish')} contents={LearningEnglishColumn} />
          <Column title={tran('fTitleFreeTest')} contents={TestColumn} />
          <Column title={tran('fContentLearningMethod')} contents={LearningEnglishColumn} />
      </Wrapper>
    )
  }
}

export default Footer
