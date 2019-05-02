import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`
export interface IGeneralCourseProps {
  // onChange: (e: string) => void
  questionTitle: string
  firstQuestion: string
  secondQuestion: string
  thirdQuestion: string
  lastQuestion: string
}

export interface IGeneralCourseState {
  value: string
}

export default class CustomCheckbox extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  state = {
    value: ''
  }
  handleChange = (e, { value }) => this.setState({ value })

  // onChange = (e: any): void => {
  //   this.setState(
  //     {
  //       value: e.target.value
  //     },
  //     () => {
  //       // this.handleChange()
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
      lastQuestion
    } = this.props
    const { value } = this.state
    return (
      <Form>
        <Form.Field>
          {/* Selected value: <b>{value}</b>
           */}
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
          />
        </Form.Field>
      </Form>
    )
  }
}
