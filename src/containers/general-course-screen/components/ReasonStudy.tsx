import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
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
import Reason from './Reason'
interface IProps {}
const Containers = styled(Container)`
  display: flex;
  flex-flow: row wrap;
`

interface IState {}
const StyledImaged = styled.div`
  padding-bottom: 20px;
`

class ReasonStudy extends Component<any, any> {
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    const { style, ...rest } = this.props
    return (
      <Containers>
        <Section title={tran('whyStudyIelts')} bgColor={colors.lightBlue}>
          <Reason text={tran('firstReason')} icon={images.firstIcon} />
          <Reason text={tran('secondReason')} icon={images.secondIcon} />
          <Reason text={tran('thirdReason')} icon={images.thirdIcon} />
          <Reason text={tran('fourthReason')} icon={images.fourthIcon} />
          <Reason text={tran('fifReason')} icon={images.fifIcon} />
        </Section>
        <StyledImaged>
          <Image src={images.ieltsBanner} />
        </StyledImaged>
      </Containers>
    )
  }
}

export default ReasonStudy
