import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors } from 'themes'

interface IProps {}

interface IState {}

const StyledHeader = styled(Header)`
  color: ${colors.white};
  border-left: 5px ${colors.main} solid;
  padding: 5px;
  text-align: left;
`

class Title extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return <StyledHeader as="h2">{tran('infoTitle')}</StyledHeader>
  }
}

Title.defaultProps = {}

export default Title
