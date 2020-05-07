import { tran } from "localization/i18n"
import * as React from "react"
import styled from "styled-components"
import { colors, images } from "themes/index"
// import { Container } from 'react-bootstrap'

// export interface IGeneralCourseProps {}

const Container = styled.div`
  background-color: white;
  margin-right: 20px;
  margin-bottom: 20px;
`
const StyledImage = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
`

const Tittle = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`
const Detail = styled.div`
  margin-bottom: 10px;
`
export interface IGeneralCourseState {}
export default class StudentExperience extends React.Component<any, IGeneralCourseState> {
  render() {
    const { title, name, detail, br, icon } = this.props
    return (
      <Container className="p-4 px-8 flex flex-col justify-center min-w-64 text-center">
        <div className={"w-full flex items-center justify-center"}>
          <StyledImage src={icon} alt="img" className={"mx-auto"} />
        </div>
        <Tittle>
          {title}
          <br />
          {name}
        </Tittle>
        <Detail>
          {detail}
          <br />
          {br}
        </Detail>
      </Container>
    )
  }
}
