import {
  Header,
  Hero,
  Image
} from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { images } from 'themes'

const Container = styled.div`
  margin: auto;
`

const StyledText = styled('span')`
  margin-right: 5px;
`

interface IProps {}
interface IState {}

class Introduction extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Hero
        opacity={0.7}
        overlayColor={'black'}
        image={images.bgInstruction1}
        particles={false}
        minHeight="100vh"
      >
        <Container>
          <Image
            src={images.bgInstruction}
            rounded
            width="160"
            alt="duckie logo"
          />
          <Header textAlign="center" textColor="white">
            {tran('learnEnglishForBusyPeople')}
          </Header>
          <div className="mt-5">
            <Button animated secondary >
              <Button.Content visible>{tran('explore')}</Button.Content>
              <Button.Content hidden>
                <StyledText>{tran('explore')}</StyledText>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
        </Container>
      </Hero>
    )
  }
}

Introduction.defaultProps = {}

export default Introduction
