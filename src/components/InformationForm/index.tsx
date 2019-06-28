import 'bootstrap/dist/css/bootstrap.min.css'
import CustomInput, { IFormCondition } from 'components/InformationForm/CustomInput'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { Box, Flex } from 'rebass'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

import { images } from 'themes'
import { emailRex, notEmptyRex } from 'tools'
import Title from './Title'

const StyledButton = styled(Button)`
  position: relative;
`

const CenterView = styled(Flex)`
margin-top: 50px;
 justify-content: center;
`

const FormContainer = styled('div')`
  background-image: url(${images.bgMap});
  //background-color: #212529;
  background-color: black;
  padding: 1.5em 5em;
  max-height: 930px;
`

const Content = styled(Flex)`
  margin: 30px 5px;
  width: 100%;
`

interface IProps {
  handleSubmit: (state: IState) => void
}

interface IErrorField {
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
      if (this.forceFieldValidate()) {
        if (this.props.handleSubmit) {
          alert('Thank for your helping, we\'ll contact you soon')
          this.props.handleSubmit(this.state)
        }
      } else {
        alert('Your information is missing')
      }
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
    const validEmail = this.refEmailField.validate()
    const validName = this.refNameField.validate()
    const validIdea = this.refIdeaField.validate()

    return validEmail && validName && validIdea
  }

  render() {
    const {error, showError} = this.state
    return (
      <FormContainer {...this.props}>
        <Title/>
        <Content>
          <Box width={1 / 2}
          >
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
              placeholder={tran('infoPhoneNumber')}
              onChange={(e: any) => this.handleOnChange('phoneNumberField', e)}
            />
          </Box>

          <Box width={1 / 2} height={1}>
            <CustomInput
              ref={(c) => this.refIdeaField = c}
              style={{marginTop: 30}}
              type={'textarea'}
              isShowError={showError}
              errorConditions={error.ideaField}
              placeholder={tran('infoYourIdea')}
              onChange={(e: any) => this.handleOnChange('ideaField', e)}
            />
          </Box>
        </Content>

        <CenterView>
          <StyledButton secondary onClick={this.handleSubmit}>
            {tran('submit')}
          </StyledButton>
        </CenterView>
      </FormContainer>
    )
  }
}

InformationForm.defaultProps = {
  handleSubmit: (state: IState) => {
  }
}

const informationForm = InformationForm
export default informationForm
