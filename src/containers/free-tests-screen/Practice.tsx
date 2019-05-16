import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import OptionalTest from '../../components/OptionalTest/OptionalTest'
import Title from 'components/InformationForm/Title'
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
export interface IGeneralCourseState {}
const OptionalPratice = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
`
export default class Practice extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Section
        bgColor="light"
        title={tran('titlePractice')}
        titleStyle={{ color: colors.darkBLue, fontSize: '25px' }}
        subTitle={tran('subTitlePractice')}
        subTitleStyle={{ fontSize: '18px', color: colors.lightGray }}
      >
        <OptionalPratice>
          <OptionalTest
            images={images.toeic}
            title={tran('titleToeic')}
            detail={tran('detailToeic')}
            subDetail={tran('detailToeic')}
          />
          <OptionalTest
            images={images.cambridge}
            title={tran('titleCambridge')}
            detail={tran('detailCambridge')}
          />
          <OptionalTest
            images={images.ielts}
            title={tran('titleIelts')}
            detail={tran('detailIelts')}
          />
        </OptionalPratice>
      </Section>
    )
  }
}
