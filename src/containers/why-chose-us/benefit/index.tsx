import * as React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { images } from 'themes'

const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 25px;
`

export interface IProps {}

export interface IState {}

export default class Benefit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div style={{ marginLeft: 400, marginRight: 400 }}>
        <Title style={{ textAlign: 'center', fontSize: 25 }}>
          At Wall Street English we always strive to improve our service and
          create new tools to help students speak English more confidently and
          reach their goals more quickly. Wall Street English students have a
          number of highly valuable privileges:
        </Title>

        <Flex bg="#FAFAFA">
          <Box
            width={2 / 3}
            marginLeft={4}
            marginRight={5}
            marginTop={4}
            marginBottom={4}
          >
            <h2>English Anytime & Benefit</h2>
            <p style={{ textAlign: 'justify' }}>
              We know it's hard for busy adults to spend time studying after
              work. Therefore, English Anytime can help you learn English
              anytime and anywhere with an Internet connection. Students can
              also benefit from the Wall Street English global community - where
              you can connect with other Wall Street English students around the
              world and access our funny English tips library for free.
            </p>
          </Box>
          <Box width={1 / 3} marginRight={3} marginTop={4} marginBottom={4}>
            <img src={images.village} />
          </Box>
        </Flex>

        <Flex marginTop={5} marginBottom={5}>
          <Box width={1 / 3} marginLeft={5}>
            <img src={images.learnWin} />
          </Box>
          <Box width={2 / 3} marginRight={4}>
            <h2>Learn & Win</h2>
            <p style={{ textAlign: 'justify' }}>
              At Wall Street English, students can redeem rewards and valuable
              gifts for their efforts with our exclusive Learn & Win program.
            </p>
          </Box>
        </Flex>

        <Flex bg="#FAFAFA" marginTop={4} marginBottom={4}>
          <Box
            width={2 / 3}
            marginLeft={4}
            marginRight={5}
            marginTop={4}
            marginBottom={4}
          >
            <h2>Connect with other students and learn more</h2>
            <p>
              "If you want to go fast, go alone . If you want to go far, go
              together . " Tell your friends about Wall Street English and you
              can go far together on your English learning journey. Extend your
              course and continue to improve your English skills in our 100%
              English environment and get attractive incentives exclusively for
              students.
            </p>
          </Box>
          <Box width={1 / 3} marginRight={3} marginTop={4} marginBottom={4}>
            <img src={images.course} />
          </Box>
        </Flex>
      </div>
    )
  }
}
