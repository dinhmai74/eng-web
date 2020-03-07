import {
  Container,
  Image,
  Section
} from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import TotalStep from './TotalStepWriting'

export interface IGeneralCourseState {}
const StyleImaged = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`
const Containers = styled(Container)`
  border: 2px solid #FAC7C4
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  width: 98%;
  margin-bottom: 20px;
`
const Title = styled.p`
  font-size: 17px !important;
  margin-bottom: 20px;
`

export default class WritingIeltsBeginners extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Section>
        <StyleImaged>
          <Image src={images.bgWritingIeltsBeginner} />
        </StyleImaged>
        <TotalStep />
      </Section>
    )
  }
}
