import * as React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

import { colors } from 'themes/index'

const H4 = styled.h4`
  font-weight: bold;
  color: ${colors.lightBlue};
`

const P = styled.p`
  font-size: 18px;
  margin-right: 30px;
  word-wrap: break-word;
`

export interface IProps {
  image: string
  title: string
  content: string
}

export interface IState {}

export default class CerBlock extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <Flex marginBottom={3}>
          <img src={this.props.image} />
          <Flex alignItems="center" width="100%" marginLeft={3}>
            <H4>{this.props.title}</H4>
          </Flex>
        </Flex>
        <P>{this.props.content}</P>
      </div>
    )
  }
}
