import * as React from 'react'
import styled from 'styled-components'

import { Container } from '@front10/landing-page-book/dist/components'
import firebase from '../../firebase'

const Containers = styled(Container)`
  border: 2px solid #FAC7C4
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  width: 98%;
  margin-bottom: 20px;
`
const Title = styled.p`
  font-size: 17px !important;
  margin-bottom: 20px;
`
interface IState {
  title: object
}

export default class Paragraph extends React.Component<any, IState> {
  static defaultProps: {}
  state = {
    title: {}
  }

  componentDidMount() {
    const titleRef = firebase.database().ref('ielts_beginner/reading')
    titleRef.on('value', (snapshot) => {
      this.setState({
        title: snapshot!.val()
      })
    })
  }
  render() {
    const title: any = this.state.title
    return (
      <Containers>
        <Title>{title.title}</Title>
        <Title>{title.paragraph1}</Title>
        <Title>{title.paragraph2}</Title>
        <Title>{title.paragraph3}</Title>
        <Title> {title.paragraph4}</Title>
      </Containers>
    )
  }
}
