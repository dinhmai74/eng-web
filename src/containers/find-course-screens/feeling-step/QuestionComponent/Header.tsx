import React, { Component } from 'react'
import styled from 'styled-components'

const NumberQuestion = styled.div`
  background-color: red;
  border: 1px solid red;
  border-radius: 25px;
  text-align: center;
  align-self: center;
  padding: 2px 10px 2px 10px;
  margin-bottom: 30px;
  color: white;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #003264;
  padding: 30px 0px 50px 0px;
  color: white;
`

export interface IProps {
  title: string
  content: string
}

export interface IState {}

export default class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <NumberQuestion>{this.props.title}</NumberQuestion>
        <h2>{this.props.content}</h2>
      </Container>
    )
  }
}
