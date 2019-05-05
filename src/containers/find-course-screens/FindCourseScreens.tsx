import { NavMargin } from 'components'
import _ from 'lodash'
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from 'formik'
import CareerStep from 'containers/find-course-screens/career-step'
import Question1Step from 'containers/find-course-screens/feeling-step/question1'
import Question2Step from 'containers/find-course-screens/feeling-step/question2'
import Question3Step from 'containers/find-course-screens/feeling-step/question3'
import GeneralStep from 'containers/find-course-screens/general-step'
import validationSchema from './validation-schema'
import Steps, { Step } from 'rc-steps'
import 'rc-steps/assets/index.css'
import 'rc-steps/assets/iconfont.css'
import Stepper, { ISteps } from './Stepper'
import React, { Component } from 'react'

import { Container } from './atoms'

interface IMyFormValues {
  firstName: string
}

interface IProps {}

interface IState {}

const steps: ISteps = {
  general: GeneralStep,
  career: CareerStep,
  question1: Question1Step,
  question2: Question2Step,
  question3: Question3Step
}

const StepField = ({ stepKey, ...rest }) => {
  const StepComponent = steps[stepKey]

  return <StepComponent stepKey={stepKey} {...rest} />
}

class FindCourseScreen extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  handleSubmit = (
    isLastStep: boolean,
    resetStepper: () => void,
    goNext: () => void
  ) => async (values: IMyFormValues, actions: FormikActions<IMyFormValues>) => {
    const { setSubmitting, resetForm } = actions

    if (isLastStep) {
      // const id = navigation.getParam('id')

      // format data before upload data
      // const data = await addOrUpdateAlert(id, values)

      // navigation.navigate('Details', {details: data})
      // TODO: do anal and result here
      // TODO: after that navigate to next result screen

      resetForm()
      resetStepper()
    } else {
      goNext()
    }
    setSubmitting(false)
  }

  renderComponent = (
    stepKey: string,
    setFieldValue,
    handleSubmit: () => void,
    goToKey: (key: string) => void
  ) => {
    const keys = Object.keys(steps)
    const index = _.indexOf(keys, stepKey)

    return (
      <React.Fragment>
        <StepField
          stepKey={stepKey}
          onChange={(key, value) => {
            setFieldValue(key, value)
            handleSubmit()
          }}
          style={{ marginBottom: 30, minHeight: '75vh' }}
        />

        <Steps labelPlacement="vertical" current={index}>
          {_.map(steps, (val, key) => (
            <Step key={key} onClick={() => goToKey(key)} />
          ))}
        </Steps>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Container>
        <Stepper initialSteps={Object.keys(steps)}>
          {({ stepKey, goNext, goToKey, isLastStep, resetStepper }) => {
            return (
              <Formik
                initialValues={{ firstName: '' }}
                validationSchema={validationSchema[stepKey]}
                validateOnChange={false}
                onSubmit={this.handleSubmit(isLastStep, resetStepper, goNext)}
                render={(formikBag: FormikProps<IMyFormValues>) => {
                  const {
                    isSubmitting,
                    errors,
                    handleSubmit,
                    setFieldValue
                  } = formikBag
                  return this.renderComponent(
                    stepKey,
                    setFieldValue,
                    handleSubmit,
                    goToKey
                  )
                }}
              />
            )
          }}
        </Stepper>
      </Container>
    )
  }
}

export default FindCourseScreen
