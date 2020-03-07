import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

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
import FormInput from '../../components/FormInput/FormInput'

const Wrapper = styled(Container)`
  display: flex;
  flex-flow: row wrap;
`
const StyleText = styled.div`
  /* display: flex;
  flex-flow: row wrap; */
`

export interface IGeneralCourseState {}
export default class Title extends React.Component<any, IGeneralCourseState> {
  render() {
    return (
      <Section
        bgColor="white"
        title={this.props.title}
        titleStyle={{ color: colors.darkBLue, fontSize: '25px' }}
        subTitle={this.props.subTitle}
        subTitleStyle={{ fontSize: '18px', color: colors.lightGray }}
      />
    )
  }
}
