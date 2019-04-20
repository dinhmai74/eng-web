import CerBlock from 'components/CerBlock'
import { tran } from 'localization/i18n'
import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { images } from 'themes'

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`

const P = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`

export interface IProps {}

export interface IState {}

export default class Certificate extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div style={{ marginLeft: 200, marginRight: 200 }}>
        <H2>{tran('titleCer')}</H2>
        <P>{tran('firstContentCer')}</P>
        <P>{tran('secondContentCer')}</P>

        <Flex justifyContent="center" marginBottom={5}>
          <img src={images.certificate} />
        </Flex>

        <Flex>
          <Box>
            <CerBlock
              image={images.cefr}
              title={tran('titleBlockCer1')}
              content={tran('contentBlockCer1')}
            />
          </Box>
          <Box>
            <CerBlock
              image={images.bulats}
              title={tran('tileBlockCer2')}
              content={tran('contentBlockCer2')}
            />
          </Box>
        </Flex>
      </div>
    )
  }
}
