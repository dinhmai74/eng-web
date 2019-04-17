import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Box, Flex } from 'rebass'
import { images } from 'themes'

export interface IProps {}

export default class Test extends React.PureComponent<IProps, any> {
  render() {
    return (
      <Container>
        <Flex>
          <Box>
            <Flex justifyContent="flex-end">
              <img src={images.img1} />
            </Flex>
          </Box>
          <Box>
            <h2>Make more of life through learning</h2>
            <p>
              Everyone is born with a dream. At Wall Street English, we help you
              to achieve yours...
            </p>
          </Box>
        </Flex>

        <Flex>
          <Flex alignItems="center">
            <Box>
              <Box>DREAM ABOUT</Box>
              <Box>STUDYING ABROAD</Box>
            </Box>
          </Flex>
          <Box bg="white">
            <img
              style={{ height: '100%', maxWidth: '100%' }}
              src={images.img2}
            />
          </Box>
        </Flex>

        <Flex>
          <Box>
            <img style={{ height: '100%' }} src={images.img3} />
          </Box>
          <Box bg="#03A9F4">DREAM ABOUT A BETTER CAREER</Box>
          <Box>
            <img style={{ height: '100%' }} src={images.img4} />
          </Box>
          <Flex alignItems="center">
            <Box bg="#8BC34A">DREAM ABOUT TRAVELLING THE WORLD</Box>
          </Flex>
        </Flex>

        <Flex>
          <Box bg="white">
            <img src={images.img5} />
          </Box>
          <Box bg="white">
            <p>DREAM ABOUT A MORE SUCCESSFUL BUSINESS</p>
          </Box>
        </Flex>
      </Container>
    )
  }
}
