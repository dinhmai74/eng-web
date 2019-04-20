import 'bootstrap/dist/css/bootstrap.min.css'
import CustomInput, { IFormCondition } from 'components/InformationForm/CustomInput'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors } from 'themes'
import { emailRex, notEmptyRex } from 'tools'
import Title from './Title'

const StyledButton = styled(Button)`
  position: relative;
`

const FormContainer = styled.div`
  background: ${colors.footerColor};
  padding: 1.5em 5em;
  max-height: 930px;
`

const Content = styled.div`
  margin: 20px 5px;
`

interface IProps {
  handleSubmit: (state: IState) => void
}

interface  IErrorField {
  nameField: IFormCondition[]
  emailField: IFormCondition[]
  phoneNumberField: IFormCondition[]
  ideaField: IFormCondition[]
}

interface IState {
  nameField: string
  emailField: string
  phoneNumberField: number | null
  ideaField: string
  error: IErrorField,
  showError: boolean,
  [rest: string]: any
}

type TStateField = 'nameField' | 'emailField' | 'phoneNumberField' | 'ideaField'

const NotEmptyCondition = {
  regex: notEmptyRex,
  message: 'Your field is empty'
}

const EmailCondition: IFormCondition = {
  regex: emailRex,
  message: 'Invalid email format'
}

class InformationForm extends Component<IProps, IState> {
  static defaultProps
  private refNameField: any
  private refIdeaField: any
  private refPhoneNumberField: any
  private refEmailField: any
  constructor(props: IProps) {
    super(props)
    this.state = {
    emailField: '',
    error: {
      emailField: [EmailCondition, NotEmptyCondition],
      ideaField: [NotEmptyCondition],
      nameField: [NotEmptyCondition],
      phoneNumberField: [NotEmptyCondition]
    },
    ideaField: '',
    nameField: '',
    phoneNumberField: null,
    showError: false
   }
  }

  /**
   * handle events
   * @param event
   */

  handleSubmit = (event: any) => {
    this.setState({
      showError: true
    }, () => {
      this.forceFieldValidate()
      if (this.props.handleSubmit) { this.props.handleSubmit(this.state) }
    })
  }

  handleOnChange = (type: TStateField, value: string) => {
    this.setState({
      [type]: value
    })
  }

  /**
   * Private methods
   */
 forceFieldValidate = () => {
   this.refEmailField.validate()
   this.refNameField.validate()
   this.refPhoneNumberField.validate()
   this.refIdeaField.validate()
 }

  render() {
    const { error , showError } = this.state
    return (
      <FormContainer {...this.props}>
        <Title />
        <Content>
          <CustomInput
            ref={(c) => this.refNameField = c}
            isShowError={showError}
            errorConditions={error.nameField}
            placeholder={tran('infoFullName')}
            onChange={(e: any) => this.handleOnChange('nameField', e)}
          />
          <CustomInput
            ref={(c) => this.refEmailField = c}
            isShowError={showError}
            errorConditions={error.emailField}
            placeholder={tran('infoContact')}
            onChange={(e: any) => this.handleOnChange('emailField', e)}
          />
          <CustomInput
            ref={(c) => this.refPhoneNumberField = c}
            isShowError={showError}
            errorConditions={error.phoneNumberField}
            placeholder={tran('infoPhoneNumber')}
            onChange={(e: any) => this.handleOnChange('phoneNumberField', e)}
          />
          <CustomInput
            ref={(c) => this.refIdeaField = c}
            isShowError={showError}
            errorConditions={error.ideaField}
            placeholder={tran('infoYourIdea')}
            onChange={(e: any) => this.handleOnChange('ideaField', e)}
          />
        </Content>
        <StyledButton secondary onClick={this.handleSubmit}>
          Submit
        </StyledButton>
      </FormContainer>
    )
  }
}

InformationForm.defaultProps = {
  handleSubmit: (state: IState) => {}
}

const informationForm = InformationForm
export default informationForm
