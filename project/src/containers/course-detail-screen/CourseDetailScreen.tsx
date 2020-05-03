import { Screen, Text } from "components"
import { CourseSuggestDetailData } from "containers/course-suggest-detail-screen/CourseSuggestDetailScreen"
import React from "react"
import { useParams } from "react-router-dom"

interface CourseDetailScreenProps {}

export const CourseDetailScreen: React.FC<CourseDetailScreenProps> = (props) => {
  const { id } = useParams()
  const convertCourseSuggestion = CourseSuggestDetailData.map((i) => i.data)[0]
  return (
    <Screen>
      <div>
        <Text className="t-h3">{convertCourseSuggestion[0].title}</Text>
      </div>
      <div className="text-xl">
        <Text>detailCourseScreen.toeicA.content</Text>
      </div>
    </Screen>
  )
}
