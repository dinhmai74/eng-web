import ReasonCard from 'components/ReasonCard/index'
import { tran } from 'localization/i18n'
import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import { Header } from 'semantic-ui-react'

import { images } from 'themes/index'
import './styles.css'

interface IProps {}

type State = Readonly<{}>

class ReasonChoseUsScreen extends PureComponent<IProps, State> {
  readonly state: State = {}

  render() {
    return (
      <Container>
        <h1 className="container-header">
          Choose Wall Street English right now
        </h1>
        <p className="container-header__content">
          There are lots of English teaching centers, but Wall Street English is
          the only one designed for busy adults just like you.
        </p>
        <ReasonCard
          isFirstItem
          reason={tran('reason1')}
          title={tran('tileReason1')}
          content={tran('contentR1')}
          ref1="http://wallstreetenglish.edu.vn/en/our-method.html"
          ref2="http://wallstreetenglish.edu.vn/en/our-method/our-certificates.html"
          contentRef1={tran('contentRef1R1')}
          contentRef2={tran('contentRef2R1')}
          image={images.reason1}
        />

        <ReasonCard
          reason={tran('reason2')}
          title={tran('tileReason2')}
          content={tran('contentR2')}
          image={images.reason2}
        />

        <ReasonCard
          reason={tran('reason3')}
          title={tran('tileReason3')}
          content={tran('contentR3')}
          image={images.reason3}
        />

        <ReasonCard
          reason={tran('reason4')}
          title={tran('tileReason4')}
          content={tran('contentR4')}
          image={images.reason4}
        />

        <ReasonCard
          reason={tran('reason5')}
          title={tran('tileReason5')}
          content={tran('contentR5')}
          image={images.reason5}
        />

        <ReasonCard
          reason={tran('reason6')}
          title={tran('tileReason6')}
          content={tran('contentR6')}
          image={images.reason6}
        />

        <ReasonCard
          reason={tran('reason7')}
          title={tran('tileReason7')}
          content={tran('contentR7')}
          image={images.reason7}
        />

        <ReasonCard
          isLastItem
          reason={tran('reason8')}
          title={tran('tileReason8')}
          content={tran('contentR8')}
          ref="http://wallstreetenglish.edu.vn/en/our-method/our-certificates.html"
          contentRef={tran('contentRefR8')}
          image={images.reason8}
        />
      </Container>
    )
  }
}

export default ReasonChoseUsScreen
