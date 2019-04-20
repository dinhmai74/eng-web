import { tran } from 'localization/i18n'
import * as React from 'react'
import { Box, Flex } from 'rebass'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 25px;
`

const H2 = styled.h2`
  color: ${colors.lightBlue};
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
        <Title
          style={{
            textAlign: 'center',
            fontSize: 25,
            marginTop: 40
          }}
        >
          {tran('titleBenefitPage')}
        </Title>

        <Flex bg="#FAFAFA">
          <Box
            width={2 / 3}
            marginLeft={4}
            marginRight={5}
            marginTop={4}
            marginBottom={4}
          >
            <H2>{tran('titleBenefit1')}</H2>
            <p style={{ textAlign: 'justify', fontSize: 20 }}>
              {tran('contentBenefit1')}
            </p>
            <a style={{ fontSize: 18 }} href={''}>
              {tran('contentBenefitRef')}
            </a>
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
            <H2>{tran('titleBenefit2')}</H2>
            <p style={{ textAlign: 'justify', fontSize: 20 }}>
              {tran('contentBenefit2')}
            </p>
            <a style={{ fontSize: 18 }} href={''}>
              {tran('contentBenefitRef')}
            </a>
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
            <H2>{tran('titleBenefit3')}</H2>
            <p style={{ textAlign: 'justify', fontSize: 20 }}>
              {tran('contentBenefit3')}
            </p>
            <a style={{ fontSize: 18 }} href={''}>
              {tran('contentBenefitRef')}
            </a>
          </Box>
          <Box width={1 / 3} marginRight={3} marginTop={4} marginBottom={4}>
            <img src={images.course} />
          </Box>
        </Flex>
      </div>
    )
  }
}
