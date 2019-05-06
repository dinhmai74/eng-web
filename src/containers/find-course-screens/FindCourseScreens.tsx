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
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { IRoute } from 'tools/routes'

import { Container } from './atoms'

export interface IFindCourseFormValues {
  career: string
  firstName: string
  pill_name: string
  question_1: number
  question_2: number
  question_3: number
}

interface IProps extends RouteComponentProps {
  /*** @property {propTypes.array} routes - display route */
  routes: IRoute[]
  /*** @property {propTypes.string} home icon - icon home display */
  homeIcon?: string
  /*** @property {propTypes.string} hiddenRoute - list route that hide nav bar */
  hiddenRoute?: string[]
  /*** @property {propTypes.boolean} render One page - nav for one page or not */
  renderOnePage?: boolean
  /*** @property {propTypes.boolean} disable headroom- */
  disableHeadroom?: boolean
}

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
  ) => async (
    values: IFindCourseFormValues,
    actions: FormikActions<IFindCourseFormValues>
  ) => {
    const { setSubmitting, resetForm } = actions

    if (isLastStep) {
      const { history } = this.props
      if (history) {
        history.push({
          pathname: '/result',
          state: { value: values }
        })
      }
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
                initialValues={{
                  career: '',
                  firstName: '',
                  pill_name: '',
                  question_1: 0,
                  question_2: 0,
                  question_3: 0
                }}
                validationSchema={validationSchema[stepKey]}
                validateOnChange={false}
                onSubmit={this.handleSubmit(isLastStep, resetStepper, goNext)}
                render={(formikBag: FormikProps<IFindCourseFormValues>) => {
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

export default withRouter(FindCourseScreen)
