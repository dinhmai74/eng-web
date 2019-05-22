import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'
import {
  Section,
  Container,
  Image,
  Wizard,
  Video,
  Gif,
  FormGroup,
  Input,
  Social
} from '@front10/landing-page-book/dist/components'

import TotalStep from './TotalStep'

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

export default class ReadingIeltsBeginners extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Section>
        <StyleImaged>
          <Image src={images.bgReadingIeltsBeginner} />
        </StyleImaged>
        <Containers>
          <Title>HOW THEY GROW - JUDY NAYER</Title>
          <Title>
            How does a butterfly grow? It starts out as a tiny egg. It becomes a
            caterpillar. It eats lots of leaves. It grows and grows. Then it
            goes inside a cocoon. At last, it comes out. It’s a butterfly!
          </Title>
          <Title>
            How does a frog grow? It starts out as a tiny egg in the water. The
            egg grows into a tadpole. It keeps changing. It eats tiny plants. It
            grows and grows. At last, it hops out of the pond. It’s a frog!
          </Title>
          <Title>
            How does a flower grow? It starts out as a seed. Sun and rain help
            the seed grow. Roots grow into the ground. The plant grows and
            grows. At last, a bud opens. It’s a flower!
          </Title>
          <Title>Now you know how they grow!</Title>
        </Containers>

        <TotalStep />
      </Section>
    )
  }
}
