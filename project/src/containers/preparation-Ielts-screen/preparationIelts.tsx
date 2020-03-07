import { Features, Section } from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export interface IGeneralCourseState {}
export default class PreparationIelts extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Section bgColor="light" title={tran('titlePreparationIelts')}>
        <Container>
          <Features
            buttonColor="danger"
            features={[
              {
                image: images.beginner,
                link: '/intro-test-ielts'
              },
              {
                image: images.advance,
                link: '/intro-ielts-advanced'
              }
            ]}
          />
        </Container>
      </Section>
    )
  }
}
