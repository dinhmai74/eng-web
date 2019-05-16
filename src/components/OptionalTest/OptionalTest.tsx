import { tran } from 'localization/i18n'
import * as React from 'react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

import { Container } from '@front10/landing-page-book/dist/components'
import Button from '@material-ui/core/Button'

export interface IGeneralCourseState {}
const Containers = styled.div`
  padding-right: 30px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 284px;

`
const Title = styled.div`
  display: flex;
  /* flex-flow: row wrap; */
  justify-content: center;
  background: #f4f7f1;
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  width: 280px;
  text-align: left;
`
const StyledImage = styled.img`
  margin-right: 10px;
`
const Introduction = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  text-align: center;
  font-style: italic;
  padding-top: 20px;
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
            <StyledImage src={this.props.images} />
            <div>{this.props.title}</div>
          </Title>
          <Introduction>
            <div>{this.props.detail}</div>
            <div style={{ paddingBottom: '30px' }}>{this.props.subDetail}</div>
          </Introduction>
          <Button variant="contained" color="secondary">
            Kiểm Tra Ngay
          </Button>
        </Wrapper>
      </Containers>
    )
  }
}
