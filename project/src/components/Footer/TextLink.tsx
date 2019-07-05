import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled('button')`
  background: transparent;
  border: none;
`

interface ILinkButtonProps {
  to: string,
  [rest: string]: any
}

export default class LinkButton extends React.Component<ILinkButtonProps> {
  render() {
    return (
      <Route render={({history}) => (
        <StyledButton {...this.props}
                onClick={() => {
                  history.push(this.props.to)
                }}>
          {this.props.children}
        </StyledButton>
      )}/>
    )
  }
}
