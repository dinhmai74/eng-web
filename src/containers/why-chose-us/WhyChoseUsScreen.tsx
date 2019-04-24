import { NavMargin, ResponsiveNav } from 'components'
import 'bootstrap/dist/css/bootstrap.min.css'
import Benefit from 'containers/why-chose-us/benefit'
import Certificate from 'containers/why-chose-us/certificate'
import { choseUsRoutes } from 'containers/why-chose-us/ChoseUsRoutes'
import Payment from 'containers/why-chose-us/payment'
import ReasonChoseUsScreen from 'containers/why-chose-us/reason-chose-us-screen'
import { Section } from '@front10/landing-page-book/dist/components'
import UniqueMethod from 'containers/why-chose-us/unique-method'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'

interface IProps {
}

interface IState {
}

class WhyChoseUsScreen extends Component<IProps, IState> {
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <ResponsiveNav renderOnePage routes={choseUsRoutes}/>
        <NavMargin/>
        <div
          id={'sectionReasonChoseUs'}
        >
          <Section
            title={tran('titleReasonChoseUs')}
            subTitle={tran('subReasonChoseUs')}
          >
            <ReasonChoseUsScreen/>
          </Section>
        </div>

        <div
          id={'sectionUniqueMethod'}
        >
          <Section
            bgColor={'light'}
            title={tran('titleUniqueMethod')}
            subTitle={tran('subUniqueMethod')}
          >
            <UniqueMethod/>
          </Section>
        </div>

        <div
          id={'sectionBenefit'}
        >
          <Section title={tran('titleBenefit')}>
            <Benefit/>
          </Section>
        </div>

        <div
          id={'sectionCertificate'}
        >
          <Section bgColor={'light'} title={tran('titleCertificate')}>
            <Certificate/>
          </Section>
        </div>

        <div
          id={'sectionPayment'}
        >
          <Section title={tran('titlePayment')}>
            <Payment/>
          </Section>
        </div>
      </div>
    )
  }
}

export default WhyChoseUsScreen
