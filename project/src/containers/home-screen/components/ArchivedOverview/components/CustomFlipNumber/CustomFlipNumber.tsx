// import AnimatedNumber from 'animated-number-react'
import AnimatedNumber from 'react-animated-number'

import {
  Column,
  Container,
  Header,
  Hero,
  Image,
  Row,
  Section
} from '@front10/landing-page-book/dist/components'
import React, { PureComponent } from 'react'
import { Box, Flex } from 'rebass'
import { Icon, SemanticICONS } from 'semantic-ui-react'
import { StyledFlex, StyledNumber , Text} from './Atoms'

function formatNumber(num) {
  return num.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

interface IProps {
  numberVal: number
  textVal: string,
  icon: SemanticICONS
}

interface IState {}

class CustomFlipNumber extends PureComponent<IProps, IState> {
  static defaultProps = {}
  state = {}

  formatValue = (value: number) => {
   return <StyledNumber>{formatNumber(value)}</StyledNumber>
  }

  render() {
    const { numberVal, textVal, icon } = this.props
    return (
      <StyledFlex flex={1} >
      <Box p={2} m={2} >
        <Icon circular inverted color="red" name={icon} size={'huge'} />
        <br/>
        <br/>
        <AnimatedNumber
          formatValue={this.formatValue}
          value={numberVal}
          duration={1500}
        />
        <Text>{textVal}</Text>
      </Box>
      </StyledFlex>
    )
  }
}

export default CustomFlipNumber
