import { tran } from 'localization/i18n'
import * as React from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { images } from 'themes/images'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
`

const P = styled.p`
  font-size: 25px;
  padding-top: 20px;
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
        <P>{this.props.title}</P>
        <Button onClick={this.props.onclick}>Choose</Button>
      </Container>
    )
  }
}
