import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 30px;
  &:hover {
    background-color: #555;
  }
`

export interface IProps {
  content?: string
  onClickBlock: () => void
  changeBackground: boolean
  goNext: () => void
}

export interface IState {
  isChangeBackground: boolean
}

export default class Block extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  clicked = () => {
    this.props.onClickBlock()
    this.props.goNext()
  }

  render() {
    const { content } = this.props
    // const color = this.props.changeBackground ? 'gray' : 'transparent'
    return <Container onClick={this.clicked}>{content}</Container>
  }
}
