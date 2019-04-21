import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors } from 'themes'

interface IProps {}

interface IState {}

const StyledHeader = styled(Header)`
  color: ${colors.white};
  font-size: 3rem;
  padding: 5px;
  text-align: center;
`

class Title extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return <StyledHeader as="h1">{tran('infoTitle')}</StyledHeader>
  }
}

Title.defaultProps = {}

export default Title
