import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import { Section, Features } from '@front10/landing-page-book/dist/components'
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export interface IGeneralCourseState {}
export default class StudentExperience extends React.Component<
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
                link: 'https://front10.com'
              },
              {
                image: images.advance,
                link: 'https://front10.com'
              }
            ]}
          />
        </Container>
      </Section>
    )
  }
}
