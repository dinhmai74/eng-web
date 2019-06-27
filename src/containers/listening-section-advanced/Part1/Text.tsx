import React, { Component } from 'react'
import { colors } from 'themes'
import styled from 'styled-components'
import { Container } from '@front10/landing-page-book/dist/components'
// import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const StyledText = styled.div`
  padding-top: 20px;
  padding-right: 4px;
`
const Containers = styled(Container)`
  padding-bottom: 10px;
`
class Text extends Component<any, any> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Containers>
        <div style={{ display: 'inline-flex' }}>
          <StyledText>{this.props.content1} </StyledText>
          <TextField
            id="standard-name"
            style={{ color: 'red' }}
            margin="normal"
          />

          <StyledText>{this.props.content2}</StyledText>
        </div>
      </Containers>
    )
  }
}

export default Text
