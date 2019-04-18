import * as React from 'react'
import { Box, Flex } from 'rebass'
import { Divider } from 'semantic-ui-react'
import { images } from 'themes'

import { tran } from 'localization/i18n'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto 400px auto 400px;
`

const H2 = styled.h2`
  color: #003c78;
`

const P = styled.p`
  font-size: 20px;
`

const LeftContainer = styled.div`
  border-left: 1px solid #38546d;
  /* height: 80px; */
  /* position: absolute;
  right: 249px;
  top: 10px; */
`

export interface IProps {}

export default class WallStreetEnglish extends React.PureComponent<
  IProps,
  any
> {
  render() {
    return (
      <Container>
        <Flex>
          <Flex width={1 / 3} justifyContent="center">
            <img src={images.img1} />
          </Flex>
          <Box width={2 / 3}>
            <H2>{tran('titleWallStreet1')}</H2>
            <P>{tran('contentWallStreet1')}</P>
          </Box>
        </Flex>

        <Flex>
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            width={1 / 2}
            bg="#003C78"
          >
            <Box marginRight={3} color="white" fontSize={3}>
              <Box>{tran('topWallStreet2')}</Box>
              <Box marginTop={3}>{tran('bottomWallStreet2')}</Box>
            </Box>
          </Flex>
          <Box width={1 / 2} bg="white">
            <img
              style={{ height: '100%', maxWidth: '100%' }}
              src={images.img2}
            />
          </Box>
        </Flex>

        <Flex>
          <Flex width={1 / 2}>
            <Box width={1 / 2}>
              <img style={{ height: '100%' }} src={images.img3} />
            </Box>
            <Flex
              width={1 / 2}
              alignItems="center"
              justifyContent="center"
              bg="#03A9F4"
              color="white"
              fontSize={3}
            >
              <Box marginLeft={3}>{tran('leftWallStreet3')}</Box>
            </Flex>
          </Flex>

          <Flex width={1 / 2}>
            <Box width={1 / 2}>
              <img style={{ height: '100%' }} src={images.img4} />
            </Box>
            <Flex
              alignItems="center"
              justifyContent="center"
              bg="#8BC34A"
              color="white"
              fontSize={3}
            >
              <Box marginLeft={3}>{tran('rightWallStreet3')}</Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <Box width={1 / 2}>
            <img src={images.img5} />
          </Box>
          <Flex width={1 / 2} alignItems="center" color="black" fontSize={3}>
            <Box marginLeft={3}>{tran('WallStreet4')}</Box>
          </Flex>
        </Flex>
      </Container>
    )
  }
}
