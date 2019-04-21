import _ from 'lodash'
import React, { Component } from 'react'
import { TextArea } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors } from 'themes'

interface IStyledFormInputProps {
  borderColor: string
  width: string | number,
  error: boolean
}

const StyledFormInput = styled.input`
  width: ${(p) => p.width};
  display: block;
  margin: 20px auto;
  border: 0;
  border-bottom: 1px solid ${(props: IStyledFormInputProps) => props.error ? colors.error : colors.gray};
  padding: 20px 25px;
  color: white;
  background: transparent;
  text-align: center;

  :focus {
    outline: none;
    border-bottom: 1px
      ${(props: IStyledFormInputProps) => props.error ? colors.error : colors.white};
    border-style: solid;
    text-align: center;
  }
`

const StyledTextArea = styled(TextArea)`
  width: ${(p) => p.width};
  height: 90%;
  display: block;
  margin: auto;
  border: 1px solid ${(props: IStyledFormInputProps) => props.error ? colors.error : colors.gray};
  padding: 20px 25px;
  color: white;
  background: transparent;
  text-align: center;

  :focus {
    outline: none;
    border-bottom: 1px
      ${(props: IStyledFormInputProps) => props.error ? colors.error : colors.white};
    border-style: solid;
    text-align: center;
  }
`

export interface IFormCondition {
  regex: RegExp
  message: string
}

export type ICustomInputType = 'input' | 'textarea'

interface IProps {
  error: boolean,
  errorConditions: IFormCondition[],
  isShowError: boolean,
  onChange: (e: string) => void
  type?: ICustomInputType
}

interface IState {
  warningText: string | null,
  error: boolean,
  value: string,
  isEligible: boolean
}

class CustomInput extends Component<
  // @ts-ignore
  IProps & JSX.IntrinsicElements.input,
  IState > {
  static defaultProps: {}
  state = {
    warningText: '',
    error: false,
    value: '',
    isEligible: true
  }

  validate = () => {
    // tslint:disable-next-line:no-shadowed-variable
    _.forEach(this.props.errorConditions, (value, key) => {
      const r = this.state.value.match(value.regex)
      if (r) {
        this.setState({
          warningText: value.message,
          isEligible: true
        })
        return
      }
      this.setState({
        warningText: value.message,
        isEligible: false
      })
    })
  }

  onChange = (e: any): void => {
    this.setState({
      value: e.target.value
    }, () => {
      this.validate()
    })
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  render() {
    const {error, isShowError, width, type, ...rest} = this.props
    const borderColor = colors.white
    const {isEligible} = this.state

    let localError = false
    if ((!isEligible && isShowError) || error) {
      localError = true
    }

    if (type === 'textarea') {
      return(
        <StyledTextArea {...rest} borderColor={borderColor} width={width} error={localError}
                                  onChange={this.onChange}/>
      )
    }

    return <StyledFormInput {...rest} borderColor={borderColor} width={width} error={localError}
                            onChange={this.onChange}/>
  }
}

CustomInput.defaultProps = {
  error: false,
  width: '98%',
  errorConditions: [],
  onChange: (e: string) => {
  },
  isShowError: false,
  type: 'input'
}

export default CustomInput
