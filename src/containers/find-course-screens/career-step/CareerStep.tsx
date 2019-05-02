import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { tran } from 'localization/i18n'
import styled from 'styled-components'
import Area from './area/area'
import { images } from 'themes'

const Container = styled('div')`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AreaContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`

interface ICareerStepProps {
  style?: any

  [rest: string]: any

  goNext: () => void
}

interface ICareerStepState {}

class CareerStep extends Component<ICareerStepProps, ICareerStepState> {
  static defaultProps = {}
  state = {}

  render() {
    return (
      <Container>
        <h2>Mục đích học tiếng Anh của bạn?</h2>
        <p>Chọn một lĩnh vực bạn quan tâm</p>
        <AreaContainer>
          <Area
            image={images.reason1}
            title="Study Abroad"
            onclick={this.props.goNext}
          />
          <Area
            image={images.reason1}
            title="Study Abroad"
            onclick={this.props.goNext}
          />
          <Area
            image={images.reason1}
            title="Study Abroad"
            onclick={this.props.goNext}
          />
          <Area
            image={images.reason1}
            title="Study Abroad"
            onclick={this.props.goNext}
          />
        </AreaContainer>
      </Container>
    )
  }
}

export default CareerStep
