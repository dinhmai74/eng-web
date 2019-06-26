import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { images, colors } from 'themes'
import {
  Section,
  Container,
  Image
} from '@front10/landing-page-book/dist/components'
import { Button, Icon } from 'semantic-ui-react'
const Containers = styled(Container)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  font-size: 18px;
`
const Detail = styled.div`
  text-align: left;
  /* background-color: red; */
  padding-left: 24%;
  padding-top: 10px;
`
const Ielts = styled.span`
  color: ${colors.lightRed};
  padding-right: 3px;
`
const Paragraph = styled.div`
  padding-bottom: 20px;
`
const Ready = styled.div`
  color: ${colors.lightRed};
  font-size: 22px !important;
  padding-bottom: 20px;
`
export interface IGeneralCourseState {}

export default class Content extends React.Component<any, IGeneralCourseState> {
  render() {
    return (
      <Containers>
        <Paragraph>
          {tran('practice')} <Ielts>IELTS</Ielts>
          {tran('sampleTest')}
        </Paragraph>
        <div>
          {tran('designedTo')}
          <Detail>
            <div>
              <Image src={images.iconLi} />
              {tran('discover')}
            </div>
            <div>
              <Image src={images.iconLi} />
              {tran('conditions')}
            </div>
            <div />
          </Detail>
        </div>
        <div>
          <Ready>{tran('areyouReady')}</Ready>
          <Button color="linkedin">{tran('startNow')}</Button>
        </div>
      </Containers>
    )
  }
}
