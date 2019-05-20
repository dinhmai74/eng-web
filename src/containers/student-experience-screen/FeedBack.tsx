import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import FormInput from '../../components/FormInput/FormInput'
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
import ItemDescription from './ItemDescription'

const Wrapper = styled(Container)`
  display: flex;
  flex-flow: row wrap;
`
const StyleText = styled.div`
  /* display: flex;
  flex-flow: row wrap; */
`

export interface IGeneralCourseState {}
export default class FeedBack extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Section
        bgColor="white"
        title={tran('titleFeedBack')}
        titleStyle={{ color: colors.lightRed, fontSize: '35px' }}
        subTitle={tran('subTitleFeedBack')}
        subTitleStyle={{ fontSize: '35px' }}
      >
        <Wrapper>
          <ItemDescription />
        </Wrapper>
      </Section>
    )
  }
}
