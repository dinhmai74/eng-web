import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import { Container } from '@front10/landing-page-book/dist/components'
import { Button, Icon } from 'semantic-ui-react'

export interface IGeneralCourseState {}
const Containers = styled(Container)`
    margin-top: -15px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`
const Introduction = styled.div`
    padding-top: 15px;
    color: ${colors.lightGray};
    background-color: ${colors.darkWhite};
`
const StyledImage = styled.img`
    float: left;
    margin-right: 20px;
`
const Title = styled.div`
    background-color: ${colors.lightGreen};
    width: 100%;
    text-align: center;
    font-size: 25px;
    padding-top:15px;
    padding-bottom: 15px;
    color: white;
`

export default class FreeTests extends React.Component<
  any,
  IGeneralCourseState
> {
  render() {
    return (
      <Containers>
        <Wrapper>
          <Title>
            {this.props.title}
          </Title>
          <Introduction>
            <StyledImage src={this.props.images} />
              {this.props.describeTitle}
          </Introduction>
          <Button color="youtube">Kiểm Tra Ngay</Button>
        </Wrapper>
      </Containers>
    )
  }
}
