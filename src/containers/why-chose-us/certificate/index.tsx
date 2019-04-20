import * as React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  text-align: center;
`

const P = styled.p`
  text-align: center;
  word-wrap: break-word;
  font-size: 20px;
`

export interface IProps {}

export interface IState {}

export default class Certificate extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div style={{ marginLeft: 400, marginRight: 400 }}>
        <H2>
          Wall Street English represents the GOLD STANDARD of certification
          accepted around the world
        </H2>

        <P>
          Wall Street English was the first global English language school to
          achieve this standard and prove its international merit.
        </P>

        <P>
          Wall Street English conducted a global study with University of
          Cambridge ESOL Examinations which aligned the Wall Street English
          curriculum with the globally recognized Common European Framework
          Reference for Languages (CEFR) scale of English proficiency.
        </P>
      </div>
    )
  }
}
