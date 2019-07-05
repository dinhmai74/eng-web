import { tran } from 'localization/i18n'
import * as React from 'react'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'
import { colors, images } from 'themes'

import Block from 'components/Block/index'

const Container = styled.div`
  margin: auto 400px auto 400px;
  height: 100%;
`

const ImageBackground = styled.div`
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
`

const Bonus = styled.div`
  font-size: 36;
`

export interface IProps {}

export default class Payment extends React.PureComponent<IProps, any> {
  render() {
    return (
      <Container>
        <div
          style={{
            backgroundImage: `url(${images.paymentBanner})`,
            height: '320px',
            backgroundSize: 'cover',
            wordWrap: 'break-word'
          }}
        >
          <Box>
            <Flex fontSize={3}>
              <div
                style={{
                  marginTop: 40,
                  marginLeft: 40,
                  width: '50%',
                  color: '#003C78',
                  fontSize: 22
                }}
              >
                {tran('topTitlePayment')}
              </div>
            </Flex>

            <Flex>
              <div
                style={{
                  marginTop: 20,
                  marginLeft: 40,
                  width: '50%',
                  fontSize: 22
                }}
              >
                {tran('bottomTitlePayment')}
              </div>
            </Flex>
          </Box>
        </div>

        <GridContainer>
          <Block
            image={images.payment}
            title={tran('titlePayment1')}
            content={tran('contentPayment1')}
          />
          <Block
            image={images.paymentTimes}
            title={tran('titlePayment2')}
            content={tran('contentPayment2')}
          />
        </GridContainer>

        <Flex justifyContent="center" marginBottom={10}>
          <Block
            image={images.paymentAll}
            title={tran('titlePayment3')}
            content={tran('contentPayment3')}
          />
        </Flex>

        <Text
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
          p={2}
          color={colors.text}
          lineHeight={2}
        >
          {tran('bonus')}
        </Text>
      </Container>
    )
  }
}
