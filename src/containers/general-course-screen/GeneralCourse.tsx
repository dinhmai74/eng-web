import { tran } from 'localization/i18n'
import * as React from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

import { Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { flex } from 'styled-system'
import { colors, images } from 'themes/index'
import Chart from './components/Chart'
import Overview from "./components/Overview"
const Wrapper = styled.div`
  /* margin-right: auto;
  margin-left: auto; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 40px;
`

const PreparationImage = styled.div``
const Description = styled.div`
  font-size: 20px;
`
const Level = styled.div`
  font-size: 16px;
  padding-left: 80px;
  padding-right: 80px;
  text-align: center;

  
`
const Courses = styled.div`
  background-color: ${colors.darkWhite};
  font-size: 12px;
`
const StyledHeader2 = styled.div`
  color: ${colors.lightBlue};
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 40px;
`
const StyleImage = styled.div`
  width: 100%;
  
`
const Title = styled.div`
  font-size: 30px;
  color: ${colors.lightBlue};
  font-weight: bold;
  margin-bottom: 20px;
`
const TitleDescription = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`
const Dot = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: ${colors.darkGrays};
  border-radius: 50px;
  margin-right: 10px;
`
const Link = styled.a`
  color: ${colors.lightRed};
`
export interface IGeneralCourseProps {}

export interface IGeneralCourseState {}

export default class GeneralCourse extends React.Component<
  IGeneralCourseProps,
  IGeneralCourseState
> {
  constructor(props: IGeneralCourseProps) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <Overview />
          <Courses>
            <Level>
              <StyledHeader2>{tran('Levels')}</StyledHeader2>
              <Description>{tran('descriptionLevel')}</Description>
            </Level>
            <Chart />
          </Courses>
          <div style={{ backgroundColor: '#fafafa' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <div style={{ padding: '40px' }}>
                <Title>{tran('titlePreparation')}</Title>
                <TitleDescription>{tran('titleDescription')}</TitleDescription>
                <TitleDescription>
                  <Dot />
                  {tran('titleDescriptionCircle1')}
                </TitleDescription>
                <TitleDescription>
                  <Dot />
                  {tran('titleDescriptionCircle2')}
                </TitleDescription>
                <Link href=" " target="_blank">
                  {tran('forwardLink')}
                </Link>
              </div>
              <PreparationImage>
                <img src={images.preparation} />
              </PreparationImage>
            </div>
          </div>
        </Wrapper>
      </Container>
    )
  }
}
