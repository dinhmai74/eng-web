import { ResponsiveNav } from 'components'
import Benefit from 'containers/why-chose-us/benefit'
import Certificate from 'containers/why-chose-us/certificate'
import Payment from 'containers/why-chose-us/payment'
import ReasonChoseUsScreen from 'containers/why-chose-us/reason-chose-us-screen'
import { Section } from '@front10/landing-page-book/dist/components'
import UniqueMethod from 'containers/why-chose-us/unique-method'
import { tran } from 'localization/i18n'
import React, { Component } from 'react'
import { colors } from 'themes'

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
        <ResponsiveNav bgColor={colors.black} chosenIndex={1} />
        <br/>
        <br/>
        <br/>
        <Section title={tran('titleReasonChoseUs')} subTitle={tran('subReasonChoseUs')}>
          <ReasonChoseUsScreen/>
        </Section>

        <Section bgColor={'light'} title={tran('titleUniqueMethod')} subTitle={tran('subUniqueMethod')}>
          <UniqueMethod/>
        </Section>

        <Section  title={tran('titleBenefit')} >
          <Benefit/>
        </Section>

        <Section bgColor={'light'} title={tran('titleCertificate')} >
          <Certificate/>
        </Section>

        <Section title={tran('titlePayment')} >
          <Payment/>
        </Section>
      </div>
    )
  }
}

export default WhyChoseUsScreen
