import TextLink from 'components/Footer/TextLink'
import * as _ from 'lodash'
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes'

export interface IContent {
  text: string
  href: string
}

interface IProps {
  title: string,
  contents?: IContent[]
}

const StyledBox = styled('ul')`
  padding: 10px;
  margin: 20px;
  list-style-type: none;
`

const Title = styled('p')`
margin-bottom: 20px;
margin-top: 40px;
font-weight: bold;
color: ${colors.text}
`

class Column extends Component<IProps> {
  static defaultProps = {
    contents: []
  }

  renderContents = () => {
    const { contents } = this.props
    return _.map(contents, (value ) => {
      return (
        <TextLink text={value.text} href={value.href} />
      )
    })
  }

  render() {
    const { title } = this.props
    const content = this.renderContents()
    return (
      <StyledBox>
        <Title>{title}</Title>
        {content}
      </StyledBox>
    )
  }
}

export default Column
