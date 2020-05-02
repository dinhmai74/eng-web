import { Screen, Text } from "components"
import * as React from "react"
import styled from "styled-components"
import { images } from "themes"
import { CourseItem, GeneralCourseItem } from "./components/CourseItem"

const Wrapper = styled.div`
  /* margin-right: auto;
  margin-left: auto; */
  /* padding: 40px; */
  flex: 1;
  /* background-color: red; */
`

export const courseGeneralData: GeneralCourseItem[] = [
  {
    id: "7699cfad-82ec-462d-bbe6-74a16fb9b09c",
    imgUri: images.cooking,
    title: "generalCourseScreen.toeic.title",
    content: "generalCourseScreen.toeic.content",
  },

  {
    id: "b0cda9a7-a124-489c-99d3-85cf34307c8b",
    imgUri: images.celebration,
    title: "generalCourseScreen.ielts.title",
    content: "generalCourseScreen.ielts.content",
  },

  {
    id: "26b4f465-2635-4d5d-99fa-db8f16b68e84",
    imgUri: images.pushNoti,
    title: "generalCourseScreen.toefl.title",
    content: "generalCourseScreen.toefl.content",
  },

  {
    id: "23ce7bbc-985c-41de-bf00-37cc10347312",
    imgUri: images.medicalCare,
    title: "generalCourseScreen.busyPeople.title",
    content: "generalCourseScreen.busyPeople.content",
  },
]

export interface IGeneralCourseProps {}

export interface IGeneralCourseState {}

const GeneralCourse: React.FC = () => {
  return (
    <Screen className="pl-40 bg-white flex">
      <div className="flex-1">
        <Text text="generalCourseScreen.ourCourse" className="text-3xl font-bold mb-24 my-12" />
        <div className="px-40 inline-block">
          {courseGeneralData.map((v, i) => {
            return <CourseItem {...v} key={i} className="mb-4" />
          })}
        </div>
      </div>
    </Screen>
  )
}

export default GeneralCourse
