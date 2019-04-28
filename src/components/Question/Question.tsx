import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

export interface IGeneralCourseProps {}

export interface IGeneralCourseState {}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-left: 30px;
`
const Wrapper = styled.div`
  padding-left: 50px;
`
const Answer = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const Dot = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 5px;
  border-style: solid;
  border-color: ${colors.gainsBoro};
`

export default class Question extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  constructor(props: IGeneralCourseProps) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <Container>
        <Title>{tran('question')}</Title>
        <Wrapper>
          <Answer>
            <Dot />
            <h3> {tran('answerOne')}</h3>
          </Answer>
          <Answer>
            <Dot />
            <h3> {tran('answerTow')}</h3>
          </Answer>
          <Answer>
            <Dot />
            <h3> {tran('answerThree')}</h3>
          </Answer>
          <Answer>
            <Dot />
            <h3> {tran('lastAnswer')}</h3>
          </Answer>
        </Wrapper>
      </Container>
    )
  }
}
