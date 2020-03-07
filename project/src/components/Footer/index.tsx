import {
  Container,
  Footer as HeroFooter,
  Hero,
  Row
} from '@front10/landing-page-book/dist/components'
import Column, { IContent } from 'components/Footer/Column'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
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
const Introduction = styled.div`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  /* background: ${colors.lightCyan}; */
`
const LearningEnglishColumn: IContent[] = [
  {
    text: tran('titleReasonChoseUs'),
    href: strings.routeWhyChoseUs
  },
  {
    text: tran('generalCourse'),
    href: strings.routeGeneralCourse
  }
]

const TestColumn: IContent[] = [
  {
    text: tran('normalTest'),
    href: strings.routeFreeTest
  }
]

interface IProps {}
interface IState {}

class Footer extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <div>
        <Wrapper bgColor={colors.bgSecondary}>
          <Column
            title={tran('fTitleLearnEnglish')}
            contents={LearningEnglishColumn}
          />
          <Column title={tran('fTitleFreeTest')} contents={TestColumn} />
          <Column
            title={tran('fContentLearningMethod')}
            contents={LearningEnglishColumn}
          />
        </Wrapper>
        <Introduction>
          <div>{tran('copyright')}</div>
          <div>{tran('company')}</div>
          <div>{tran('address')}</div>
        </Introduction>
      </div>
    )
  }
}

export default Footer
