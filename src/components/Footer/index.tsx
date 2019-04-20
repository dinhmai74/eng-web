import Column, { IContent } from 'components/Footer/Column'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'
import { colors } from 'themes'

const Wrapper = styled(Flex)`
  border-top: 1px solid ${colors.border};
  padding: 10px;
  margin: 10px;
  justify-content: space-around;
  min-height: 35vh;
`

const LearningEnglishColumn: IContent[] = [
  {
    text: tran('general'),
    href: '#'
  },
  {
    text: tran('general'),
    href: '#'
  },
  {
    text: tran('general'),
    href: '#'
  }
]

interface IProps {}
interface IState {}

class Footer extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Wrapper>
        <Column title={tran('fTitleLearnEnglish')} contents={LearningEnglishColumn} />
        <Column title={tran('fTitleFreeTest')} contents={LearningEnglishColumn} />
        <Column title={tran('fContentLearningMethod')} contents={LearningEnglishColumn} />
      </Wrapper>
    )
  }
}

export default Footer
