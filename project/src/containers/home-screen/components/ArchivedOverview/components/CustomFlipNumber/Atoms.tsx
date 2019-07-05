import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { colors } from 'themes'

export const StyledNumber = styled('h1')`
  color: ${colors.text};
  font-size: 3rem;
  text-align: center;
`

export const StyledFlex = styled(Flex)`
    word-wrap: break-word;
    padding: 20px;
    text-align: center;
`

export const Text = styled('p')`
  text-align: center;
  font-size: 1.5rem;
`
