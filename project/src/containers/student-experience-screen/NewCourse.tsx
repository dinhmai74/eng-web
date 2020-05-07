import { tran } from "localization/i18n"
import * as React from "react"
import styled from "styled-components"
import { colors, images } from "themes/index"

import {
  Card,
  Column,
  Container,
  Header,
  Hero,
  Image,
  Paragraph,
  Row,
  Section,
} from "@front10/landing-page-book/dist/components"
import FormInput from "../../components/FormInput/FormInput"
import FeatureCourse from "./FeatureCourse"
// export interface IGeneralCourseProps {}
const Containers = styled.div`
  /* height: 70vh; */
  /* background-color: blue; */
`
const Wrapper = styled.div`
  display: flex;
`
const StyleParagraph = styled(Paragraph)`
  /* padding-left: 80px; */
  text-align: center;
`
export interface IGeneralCourseState {}
export default class StudentExperience extends React.Component<any, IGeneralCourseState> {
  render() {
    return (
      <Section
        bgColor="light"
        title={tran("titleNewCourse")}
        titleStyle={{ color: colors.gray, fontSize: "18px" }}
        subTitle={tran("subTitleNewCourse")}
        subTitleStyle={{ fontSize: "35px" }}
      >
        <Container>
          <StyleParagraph text={tran("detailNewCourse")} />
          <Wrapper className="mt-8">
            <FeatureCourse
              icon={images.icons1}
              title={tran("descriptionImage1")}
              name={tran("global1")}
              detail={tran("descriptionCourse1")}
              br={tran("br1")}
            />
            <FeatureCourse
              icon={images.icons2}
              title={tran("descriptionImage2")}
              name={tran("global2")}
              detail={tran("descriptionCourse2")}
              br={tran("br2")}
            />
            <FeatureCourse
              icon={images.icons3}
              title={tran("descriptionImage3")}
              name={tran("global3")}
              detail={tran("descriptionCourse3")}
              br={tran("br3")}
            />
            <FeatureCourse
              icon={images.icons4}
              title={tran("descriptionImage4")}
              name={tran("global4")}
              detail={tran("descriptionCourse4")}
              br={tran("br4")}
            />
          </Wrapper>
        </Container>
      </Section>
    )
  }
}
