import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'
import { element } from 'prop-types'
import { AnyCnameRecord } from 'dns'

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`
export interface IGeneralCourseProps {
  onChange: (e: string) => void
  questionTitle: string
  firstQuestion: string
  secondQuestion: string
  thirdQuestion: string
  lastQuestion: string
  correctAnswer: string
}

export interface IGeneralCourseState {
  value: string
  point: number
  sumPoint: number
  // correctAnswer: string
}

export default class CustomCheckbox extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  state = {
    value: '',
    point: 0,
    sumPoint: 0
  }
  handleChange = (e, { value }) => {
    this.setState({
      value
    })
    if (value === this.props.correctAnswer) {
      this.setState({
        point: this.state.point + 1
      })
      return
    }
  }

  // onChange = (e: any): void => {
  //   this.setState(
  //     {
  //       value: e.target.value
  //     },
  //     () => {
  //       // this.handleChange(e, {value})
  //     }
  //   )
  //   if (this.props.onChange) {
  //     this.props.onChange(e.target.value)
  //   }
  // }

  render() {
    const {
      questionTitle,
      firstQuestion,
      secondQuestion,
      thirdQuestion,
      lastQuestion,
      correctAnswer
    } = this.props
    const { value, point } = this.state
    console.log('pointttttt: ', point)
    return (
      <Form>
        <Form.Field>
          {/* Selected value: <b>{value}</b> */}
          <Title>{questionTitle}</Title>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={firstQuestion}
            name="checkboxRadioGroup"
            value={firstQuestion}
            checked={value === firstQuestion}
            onChange={this.handleChange}
            style={{ paddingLeft: '20px' }}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={secondQuestion}
            name="checkboxRadioGroup"
            value={secondQuestion}
            checked={value === secondQuestion}
            onChange={this.handleChange}
            style={{ paddingLeft: '20px' }}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={thirdQuestion}
            name="checkboxRadioGroup"
            value={thirdQuestion}
            checked={value === thirdQuestion}
            onChange={this.handleChange}
            style={{ paddingLeft: '20px' }}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={lastQuestion}
            name="checkboxRadioGroup"
            value={lastQuestion}
            checked={value === lastQuestion}
            onChange={this.handleChange}
            style={{ paddingLeft: '20px' }}
          />
        </Form.Field>
      </Form>
    )
  }
}
