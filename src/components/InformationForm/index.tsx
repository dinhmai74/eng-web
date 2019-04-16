import { Header, Hero, Image } from '@front10/landing-page-book/dist/components'
import 'App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { Box, Flex } from 'rebass'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors } from 'themes'
import Title from './Title'

interface IProps {}

interface IState {}

const BootstrapButton = (props) => (
  <button className="btn btn-primary">{props.children}</button>
)

const StyledButton = styled(BootstrapButton)``

const Container = styled(Box)`
  background: ${colors.footerColor};
  padding: 1em;
`

class InformationForm extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Container>
        <Flex>
          <Title />
        </Flex>
        <Flex />
      </Container>
    )
  }
}

InformationForm.defaultProps = {}

export default InformationForm
