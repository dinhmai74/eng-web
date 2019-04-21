import * as React from 'react'
import styled from 'styled-components'
import { colors } from 'themes'

const Text = styled('li')`
  color: ${colors.gray}
  margin: 10px 0;

  a{
  color: ${colors.gray}
    :hover{
     color: ${colors.gray}
    }
  }
`
interface IProps {
  text: string,
  href?: string
}

class TextLink extends React.PureComponent<IProps> {
  static defaultProps = {
    href: '#'
  }

  render() {
    const { text, href } = this.props
    return (
      <Text>
        <a href={href}>{text}</a>
      </Text>
    )
  }
}

export  default TextLink
