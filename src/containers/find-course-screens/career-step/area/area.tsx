import * as React from 'react'
import { images } from 'themes/images'
import { tran } from 'localization/i18n'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export interface IProps {
  image: string
  title: string
  onclick: () => void
}

export interface IState {}

export default class Area extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <img src={this.props.image} />
        <p>{this.props.title}</p>
        <Button onClick={this.props.onclick}>Choose</Button>
      </Container>
    )
  }
}
