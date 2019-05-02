import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import CustomCheckbox from './CustomCheckbox'

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

export interface IGeneralCourseProps {
  questionTitle: string
}
export interface IGeneralCourseState {}

export default class Question extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  constructor(props: IGeneralCourseProps) {
    super(props)

    this.state = {}
  }
  render() {
    const { questionTitle } = this.props
    return (
      <Container>
        <Title>{questionTitle}</Title>
        <Wrapper>
          <Answer>
            <CustomCheckbox
              questionTitle= {'1.How old are you?'}
              firstQuestion={'dasdas'}
              secondQuestion={'ddasdasdas'}
              thirdQuestion={'dasddasdasas'}
              lastQuestion={'dasdadasdass'}
            />
          </Answer>
        </Wrapper>
      </Container>
    )
  }
}
