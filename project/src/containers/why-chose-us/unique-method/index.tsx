import { Container, Section } from '@front10/landing-page-book/dist/components'
import Block from 'components/Block/index'
import * as React from 'react'
import { images } from 'themes/index'

import { tran } from 'localization/i18n'
import './styles.css'

export interface IProps {}

export interface IState {}

export default class UniqueMethod extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <div className="grid-container">
          <Block
            image={images.icon1}
            title={tran('titleMethod1')}
            content={tran('contentMethod1')}
          />
          <Block
            image={images.icon2}
            title={tran('titleMethod2')}
            content={tran('contentMethod2')}
          />
          <Block
            image={images.icon3}
            title={tran('titleMethod3')}
            content={tran('contentMethod3')}
          />
          <Block
            image={images.icon4}
            title={tran('titleMethod4')}
            content={tran('contentMethod4')}
          />
          <Block
            image={images.icon5}
            title={tran('titleMethod5')}
            content={tran('contentMethod5')}
          />
          <Block
            image={images.icon6}
            title={tran('titleMethod6')}
            content={tran('contentMethod6')}
          />
        </div>
        <div className="images-text">
          <img src={images.footer} />
          <div className="centered">THE METHOD THAT MAKES A DIFFERENCE!</div>
        </div>
      </Container>
    )
  }
}
