import { Screen, Text } from "components"
import { CourseSuggestDetailData } from "containers/course-suggest-detail-screen/CourseSuggestDetailScreen"
import React from "react"
import { useParams } from "react-router-dom"
import cx from "classnames"
import { ChevronsRight } from "react-feather"
import { Button, Icon } from "semantic-ui-react"
import styled from "styled-components"
import tw from "tailwind.macro"

interface CourseDetailScreenProps {}

const StyledForm = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    h1 {
      ${tw`font-sans text-6xl font-hairline text-6xl text-teal-500`}
    }
    p {
      ${tw`text-gray-700 text-lg`}
    }
    h2 {
      ${tw`text-2xl font-hairline mt-5 text-teal-500`}
    }
    ul {
      ${tw`inline-flex`}
    }
    li {
      ${tw`mr-5`}
    }
    a {
      ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
    }
  }
`

export const CourseDetailScreen: React.FC<CourseDetailScreenProps> = (props) => {
  const { id } = useParams()
  const convertCourseSuggestion = CourseSuggestDetailData.map((i) => i.data)[0]
  return (
    <Screen className="flex flex-col items-center !px-32 pb-32 bg-gray-100">
      <div className={cx("my-8 w-full ")}>
        <Text className="text-left t-h3">{convertCourseSuggestion[0].title}</Text>
      </div>

      <div className="text-lg">
        <Text>detailCourseScreen.toeicA.content.general</Text>

        <div className="mx-8 my-8 text-gray-400 children:items-center children:flex ">
          <div className="flex ">
            <ChevronsRight className="mr-2" />
            <Text>Do you need 450 to 550 TOEIC to qualify for the school?</Text>
          </div>
          <div className="flex">
            <ChevronsRight className="mr-2" />
            <Text>Do you need English to get job/jump?</Text>
          </div>
          <div className="flex">
            <ChevronsRight className="mr-2" />
            <Text>Need a TOEIC test to advance your career?</Text>
          </div>
        </div>

        <Text text="detailCourseScreen.toeicA.content.afterQuestion" />

        <div className="mx-8 my-4">
          <Text>
            ► 100% loss of English roots
            <br />
            ► Do not know how to test TOEIC <br />► Self-study, but not effective
          </Text>
        </div>

        <Text className="font-semibold my-4">
          DON'T worry!!! Ducky English language has an exclusive solution for you! That's...
        </Text>

        <div className="pl-8">
          <Text>detailCourseScreen.toeicA.content.worry</Text>
        </div>
      </div>

      <div className={cx("my-8")}>
        <Button animated secondary>
          <Button.Content visible>Register</Button.Content>
          <Button.Content hidden>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </div>
    </Screen>
  )
}
