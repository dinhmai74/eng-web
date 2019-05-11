import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import OptionalTest from '../../components/OptionalTest/OptionalTest'
import Title from 'components/InformationForm/Title'
export interface IGeneralCourseState {}
const OptionalPratice = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding-top: 30px;
`
export default class Practice extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
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
    )
  }
}
