import {
  Header,
  Hero,
  Image,
} from '@front10/landing-page-book/dist/components'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

interface IProps {}

interface IState {}

const Container = styled.div`
  margin: auto ;
`

class Introduction extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Hero
        opacity={1}
        overlayColor="#373D45"
        particlesSugar="crazyStars"
        minHeight="100vh"
      >
        <Container>
          <Image
            src="https://front10.com/landing-page-book/images/logo/front10.png"
            rounded
            width="160"
            alt="Front10 logo"
          />
          <Header textAlign="center" textColor="white">
            {tran('learnEnglishForBusyPeople')}
          </Header>
          <div className="mt-5">
            <Button animated secondary >
              <Button.Content visible>{tran('explore')}</Button.Content>
              <Button.Content hidden>
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
