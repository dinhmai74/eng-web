import React, { Component } from 'react'
import { colors } from 'themes'
import styled from 'styled-components'
import { Container } from '@front10/landing-page-book/dist/components'
import AudioListening from 'components/AudioListening/AudioListening'
import { Section } from '@front10/landing-page-book/dist/components'
import TextField from '@material-ui/core/TextField'
import { Input } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import { tran } from 'localization/i18n'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import { IRoute } from 'tools/routes'
import Text from '../Part1/Text'
import StatementQuestion from 'components/StatementQuestion/StatementQuestion'
export interface IGeneralCourseProps extends RouteComponentProps {
  /*** @property {propTypes.array} routes - display route */
  routes?: IRoute[]
  /*** @property {propTypes.string} home icon - icon home display */
  homeIcon?: string
  /*** @property {propTypes.string} hiddenRoute - list route that hide nav bar */
  hiddenRoute?: string[]
  /*** @property {propTypes.boolean} render One page - nav for one page or not */
  renderOnePage?: boolean
  /*** @property {propTypes.boolean} disable headroom- */
  disableHeadroom?: boolean
  history: any
}
interface IState {}

const Border = styled.div`
  border: 5px solid #c5c5c5;
  padding: 15px;
`
const StyledText = styled.div`
  padding-top: 10px;
`
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  justify-content: center;
  font-size: 28px;
`
class FinalStep extends Component<IGeneralCourseProps, IState> {
  static defaultProps: {}
  state = {}
  handleChange = () => {
    const { history } = this.props
    if (history) {
      history.push({
        pathname: '/listening-test-advanced-part2'
      })
    }
  }
  render() {
    return (
      <Section
        bgColor={colors.lightRed}
        title={'Question 17-20'}
        titleStyle={{ fontSize: '22px !important' }}
        subTitle={'Choose FOUR statements which are mentioned in the listening'}
        subTitleStyle={{ fontSize: '22px' }}
      >
        <StatementQuestion
          statement={
            'A. Product Life Cycle cannot predict the length of each stage.'
          }
        />
        <StatementQuestion
          statement={
            'B. Product Life Cycle Model can help forecast sales with accuracy.'
          }
        />
        <StatementQuestion statement={'C. The Model can be self-fulfilling.'} />
        <StatementQuestion
          statement={
            'D. Growth can continue for a long time by improving a product aggressively on an ongoing basis.'
          }
        />
        <StatementQuestion
          statement={
            'E. Producers in PCs market 1990s was successful because they improved products month after month.'
          }
        />
        <StatementQuestion
          statement={
            'F. Marketer should not base their decisions on Product Life Cycle Model.'
          }
        />
        <StyledButton>
          <Button color="linkedin" onClick={this.handleChange}>
            {tran('Finish the LISTENING part')}
          </Button>
        </StyledButton>
      </Section>
    )
  }
}

export default withRouter(FinalStep)
