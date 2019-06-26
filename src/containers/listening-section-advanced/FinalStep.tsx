import React, { Component } from 'react'
import { colors } from 'themes'
import styled from 'styled-components'
import { Container } from '@front10/landing-page-book/dist/components'
import CountDown from './CountDown'
import AudioListening from 'components/AudioListening/AudioListening'
import TotalStepListening from './TotalStepListening'
import { Section } from '@front10/landing-page-book/dist/components'
import TextField from '@material-ui/core/TextField'
import { Input } from 'semantic-ui-react'
import Text from './Text'

interface IState {}

const Border = styled.div`
  border: 5px solid #c5c5c5;
  padding: 15px;
`
const StyledText = styled.div`
  padding-top: 10px;
`
class FinalStep extends Component<any, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Section
        bgColor={colors.lightRed}
        title={'Question 4-9'}
        titleStyle={{ fontSize: '22px !important' }}
        subTitle={
          'Complete the form below, using NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.'
        }
        subTitleStyle={{ fontSize: '22px' }}
      >
        <Border>
          <Text
            content1={'1. There is no need to '}
            content2={' lots of people.  '}
          />
          <Text
            content1={'2.. Pay attention to the    '}
            content2={' of the final report   '}
          />
          <Text
            content1={'3. Prepare  '}
            content2={
              '  one for the teacher, another for the sb.1dents themselves.   '
            }
          />
          <Text
            content1={' 4. The deadline of the final paper is '}
            content2={' '}
          />
          <Text
            content1={'5.The students can  '}
            content2={'their topics before the beginning of Aoril.   '}
          />
        </Border>
      </Section>
    )
  }
}

export default FinalStep
