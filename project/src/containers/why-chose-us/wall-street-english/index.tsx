import * as React from 'react'
import { Box, Flex } from 'rebass'
import { Divider } from 'semantic-ui-react'
import { images } from 'themes'
import { Section, Container } from '@front10/landing-page-book/dist/components'

import { tran } from 'localization/i18n'
import styled from 'styled-components'

const StyledSection = styled(Section)``

const H2 = styled.h2`
  color: #003c78;
`

const P = styled.p`
  font-size: 20px;
`

export interface IProps {
}

export default class WallStreetEnglish extends React.PureComponent<IProps,
  any> {
  render() {
    return (
      <Section bgColor="light">
        <Container>
          <Flex p={5}>
            <Box width={3 / 3}>
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
                style={{height: '100%', maxWidth: '100%'}}
                src={images.img2}
              />
            </Box>
          </Flex>

          <Flex>
            <Flex width={1 / 2}>
              <Box width={1 / 2}>
                <img style={{height: '100%'}} src={images.img3}/>
              </Box>
              <Flex
                width={1 / 2}
                alignItems="center"
                justifyContent="center"
                bg="#03A9F4"
                color="white"
                fontSize={3}
              >
                <Box p={1} marginLeft={3}>
                  {tran('leftWallStreet3')}
                </Box>
              </Flex>
            </Flex>

            <Flex width={1 / 2}>
              <Box width={1 / 2}>
                <img style={{height: '100%'}} src={images.img4}/>
              </Box>
              <Flex
                alignItems="center"
                justifyContent="center"
                bg="#8BC34A"
                color="white"
                fontSize={3}
              >
                <Box p={1} marginLeft={3}>
                  {tran('rightWallStreet3')}
                </Box>
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Box width={1 / 2}>
              <img src={images.img5}/>
            </Box>
            <Flex width={1 / 2} alignItems="center" color="black" fontSize={3}>
              <Box marginLeft={3}>{tran('WallStreet4')}</Box>
            </Flex>
          </Flex>
        </Container>
      </Section>
    )
  }
}
