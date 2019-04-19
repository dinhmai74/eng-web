import { tran } from 'localization/i18n'
import * as React from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

import { Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { flex } from 'styled-system'
import { colors, images } from 'themes/index'
import Chart from '../course-progress/components/Chart'

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Section = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 40px;
`
const Content = styled.h3`
  text-align: left;
  font-size: 20px;
  color: black;
  margin-right: 40px;
`
const Instruction = styled.div`
  color: white;
  margin-left: 20px;
  margin-top: 40px;
`
const StyledHeader1 = styled(Header)`
  color: ${colors.lightBlue};
  font-weight: 700;
  font-size: 30px;
  height: 42px;
  margin-bottom: 20px;
`
const PreparationImage = styled.div`
  height: 370px;
  width: 370px;
`
const Description = styled.h3`
  font-size: 20px;
`
const Level = styled.div`
  font-size: 16px;
  margin-left: 200px;
  margin-right: 200px;

  margin-bottom: 130px;
  text-align: center;
`
const Courses = styled.div`
  background-color: #fafafa;
  font-size: 12px;
`
const StyledHeader2 = styled(Header)`
  color: ${colors.lightBlue};
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 40px;
`
const StyleImage = styled.div`
  padding-right: 15px;
`
const Title = styled.div`
  font-size: 30px;
  color: #003c78;
  font-weight: bold;
  margin-bottom: 20px;
`
const TitleDescription = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`
const Dot = styled.div`
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #3f3f3f;
  border-radius: 50px;
  margin-right: 10px;
`
const Link = styled.a`
  color: #f54337;
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
          <Section>
            <Instruction>
              <StyledHeader1 as="h3">Tổng quan</StyledHeader1>
              <Content>{tran('generalCoursesContent')}</Content>
            </Instruction>
            <StyleImage>
              <img className="" src={images.general} />
            </StyleImage>
          </Section>
          <Courses>
            <Level>
              <StyledHeader2 as="h3">Các cấp độ</StyledHeader2>
              <Description>{tran('descriptionLevel')}</Description>
            </Level>
            <Chart />
          </Courses>
          <div style={{ backgroundColor: '#fafafa' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div style={{ padding: '40px' }}>
                <Title>IELTS Preparation</Title>
                <TitleDescription>
                  {tran('titleDescription')}
                </TitleDescription>
                <TitleDescription>
                  <Dot />
                  {tran('titleDescriptionCircle1')}
                </TitleDescription>
                <TitleDescription>
                  <Dot />
                  {tran('titleDescriptionCircle2')}
                </TitleDescription>
                <Link href=" " target="_blank">
                  Tìm hiểu thêm{' '}
                </Link>
              </div>
              <PreparationImage>
                <img src={images.preparation} style={{ maxWidth: '100%' }} />
              </PreparationImage>
            </div>
          </div>
        </Wrapper>
      </Container>
    )
  }
}
