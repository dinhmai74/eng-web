import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Flex } from 'rebass'
import { images } from 'themes'

export interface IProps {}

export default class WallStreetEnglish extends React.PureComponent<
  IProps,
  any
> {
  render() {
    return (
      <div
        style={{
          marginLeft: 400,
          marginRight: 400
        }}
      >
        <Flex>
          <Flex width={1 / 3} justifyContent="center">
            <img src={images.img1} />
          </Flex>
          <Box width={2 / 3}>
            <h2>Make more of life through learning</h2>
            <p>
              Everyone is born with a dream. At Wall Street English, we help you
              to achieve yours...
            </p>
          </Box>
        </Flex>

        <Flex>
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            width={1 / 2}
            bg="#003C78"
          >
            <Box>
              <Box>DREAM ABOUT</Box>
              <Box>STUDYING ABROAD</Box>
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
            <Box>
              <img style={{ height: '100%' }} src={images.img3} />
            </Box>
            <Flex alignItems="center" justifyContent="center" bg="#03A9F4">
              DREAM ABOUT A BETTER CAREER
            </Flex>
          </Flex>

          <Flex width={1 / 2}>
            <Box>
              <img style={{ height: '100%' }} src={images.img4} />
            </Box>
            <Flex alignItems="center" justifyContent="center" bg="#8BC34A">
              DREAM ABOUT TRAVELLING THE WORLD
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <Box width={1 / 2}>
            <img src={images.img5} />
          </Box>
          <Flex width={1 / 2} alignItems="center">
            DREAM ABOUT TRAVELLING THE WORLD
          </Flex>
        </Flex>
      </div>
    )
  }
}
