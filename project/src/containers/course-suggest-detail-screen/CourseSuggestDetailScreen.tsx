import cx from "classnames"
import { Screen, Text } from "components"
import { courseGeneralData } from "containers/general-course-screen/GeneralCourse"
import React from "react"
import { useParams } from "react-router-dom"
import { images } from "themes"
import { SugestionCourseDetailItem } from "./components/SugestionCourseDetailItem"

interface CourseSuggestDetailScreenProps {}

interface SugestionCourseData {
  generalCourseId: string
  data: SugestionCourseDetailItem[]
}

export const CourseSuggestDetailData: SugestionCourseData[] = [
  {
    generalCourseId: "7699cfad-82ec-462d-bbe6-74a16fb9b09c",
    data: [
      {
        id: "de7bd5fa-caa1-4168-96f6-db999f8e9033",
        title: "sugestionCourseScreen.toeicA.title",
        content: "sugestionCourseScreen.toeicA.content",
        imgUri: images.illuRoad,
        generalCourseId: "7699cfad-82ec-462d-bbe6-74a16fb9b09c",
        price: 200,
      },
      {
        id: "017b4d97-9f24-43b6-93cd-1b272ce8b1d8",
        title: "sugestionCourseScreen.toeicB.title",
        content: "sugestionCourseScreen.toeicB.content",
        imgUri: images.illuSync,
        generalCourseId: "7699cfad-82ec-462d-bbe6-74a16fb9b09c",
        price: 300,
      },
      {
        id: "3aa25571-c9fb-4b6b-9bd1-9397b89fddfb",
        title: "sugestionCourseScreen.toeicBPLUS.title",
        content: "sugestionCourseScreen.toeicBPLUS.content",
        imgUri: images.illuFolder,
        generalCourseId: "7699cfad-82ec-462d-bbe6-74a16fb9b09c",
        price: 500,
      },

      {
        id: "4fa8bc2d-58a3-40c6-a7b7-210f8ffe38b",
        title: "sugestionCourseScreen.toeicAPLUS.title",
        content: "sugestionCourseScreen.toeicAPLUS.content",
        imgUri: images.illuTree,
        generalCourseId: "7699cfad-82ec-462d-bbe6-74a16fb9b09c",
        price: 400,
      },
    ],
  },
]

export const CourseSuggestDetailScreen: React.FC<CourseSuggestDetailScreenProps> = (props) => {
  const { id } = useParams()
  const data = CourseSuggestDetailData.filter((v) => v.generalCourseId === id)
  console.log("data", data)

  if (data.length <= 0) {
    return (
      <Screen className="flex justify-center ">
        <div className="py-24 flex flex-col items-center">
          <img src={images.illuNotFound} alt="not found" className="w-64" />
          <p className="m-12 text-gray-700 text-3xl">Course not found</p>
        </div>
      </Screen>
    )
  }

  const generalCourse = courseGeneralData.filter((v) => v.id === data[0].generalCourseId)
  console.log("generalCourse", generalCourse)
  return (
    <Screen className="!pt-32 min-h-screen">
      <div className="flex-1">
        <Text className={cx("text-3xl mb-12")} text={generalCourse[0].title} />
        <div className="inline-block px-24">
          {data[0].data.map((v, i) => (
            <SugestionCourseDetailItem {...v} key={i} className="mb-8" />
          ))}
        </div>
      </div>
    </Screen>
  )
}
