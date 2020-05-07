import { Container, Paragraph, Row, Section } from "@front10/landing-page-book/dist/components"
import Chart from "containers/general-course-screen/components/Chart"
import { tran } from "localization/i18n"
import React, { PureComponent } from "react"
import { Button, Icon } from "semantic-ui-react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { strings } from "../../../tools/strings"

const ListChart = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const ButtonWrapper = styled(Row)`
  margin-top: 10px;
  justify-content: center;
`

export const CourseGeneral: React.FC = () => {
  const history = useHistory()
  return (
    <Section title={tran("courseProgress")}>
      <Container>
        <Paragraph text={tran("h_courseSub")} style={{ textAlign: "center" }} />
        <ButtonWrapper>
          <Button
            secondary
            animated
            basic
            style={{ alignSelf: "center" }}
            onClick={() => history.push(strings.routeGeneralCourse)}
            className="mt-4"
          >
            <Button.Content visible>{tran("viewMore")}</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </ButtonWrapper>
        <ListChart>
          <Chart name={"SURVIVAL"} />
          <Chart name={"WAYSTAGE"} />
          <Chart name={"UPPER WAYSTAGE"} />
          <Chart name={"THRESHOLD"} />
          <Chart name={"MILESTONE"} />
          <Chart name={"MASTERY"} />
        </ListChart>
      </Container>
    </Section>
  )
}

export default CourseGeneral
