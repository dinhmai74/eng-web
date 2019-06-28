import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { tran } from 'localization/i18n'
import styled from 'styled-components'
import Area from './area/area'
import { images } from 'themes'

const Container = styled('div')`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AreaContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`

const H1 = styled.h1`
  color: #003264;
  font-size: 40px;
  padding-top: 40px;
`
const P = styled.p`
  font-size: 25px;
  padding-top: 10px;
  padding-bottom: 30px;
`

export type TCareerValue = 'study' | 'travel' | 'business' | 'career'

interface ICareerStepProps {
  style?: any

  onChange: (key: string, value: any) => {}

  [rest: string]: any

  goNext: () => void
}

interface ICareerStepState {}

class CareerStep extends Component<ICareerStepProps, ICareerStepState> {
  static defaultProps = {}
  state = {}

  onChange = (value: TCareerValue) => {
    this.props.onChange('career', value)
  }

  render() {
    return (
      <Container
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <H1>{tran('purpose')}</H1>
        <P>{tran('choose')}</P>
        <AreaContainer>
          <Area
            image={images.study}
            title={tran('studyAbroad')}
            onclick={() => this.onChange('study')}
          />
          <Area
            image={images.travel}
            title={tran('travel')}
            onclick={() => this.onChange('travel')}
          />
          <Area
            image={images.business}
            title={tran('business')}
            onclick={() => this.onChange('business')}
          />
          <Area
            image={images.career}
            title={tran('career')}
            onclick={() => this.onChange('career')}
          />
        </AreaContainer>
      </Container>
    )
  }
}

export default CareerStep
