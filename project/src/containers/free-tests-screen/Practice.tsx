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
import Title from 'components/InformationForm/Title'
import OptionalTest from '../../components/OptionalTest/OptionalTest'
// import { IProps } from 'containers/find-course-screens/feeling-step/QuestionComponent/Header';

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
            url=""
          />

          <OptionalTest
            images={images.cambridge}
            title={tran('titleCambridge')}
            detail={tran('detailCambridge')}
            subDetail={''}
            url="/level-test"
          />
          <OptionalTest
            images={images.ielts}
            title={tran('titleIelts')}
            detail={tran('detailIelts')}
            subDetail={''}
            url="/ielts-test"
          />
        </OptionalPratice>
      </Section>
    )
  }
}
