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
        <Text className="text-3xl">{convertCourseSuggestion[0].title}</Text>
      </div>

      <div className="text-xl">
        <Text>
          TOEIC Test Course 4 skills in listening, speaking, reading and writing goals 400-450 +
          listening; 70-110 + Speaking; 70-110 + Writing. Ms. Hoa is committed to output, completely
          FREE of CHARGE if not satisfactory.
        </Text>
        <Text>
          Now with TOEIC you only have access to two skills are TOEIC Listening and TOEIC Reading,{" "}
          <br />
          but IN order to improve the ability to communicate and writing skills, TOEIC Speaking &
          Writing course is the BEST choice for you to communicate professionally in the
          international communication environment. Therefore, TOEIC 4 skills are extremely essential
          for you, with the English Ms Hoa learn about this course! TOEIC STUDY COURSE 4 SKILLS A +
          (Target 400-450 + hear read; 70-110 + Speaking; 70-110 + Writing) ► Object: All you
          haven't learned English ever or lost English roots despite years of learning, but the
          basic knowledge is still very poor, the ability to hear is weak. ► Course : undergo two
          courses in Ms Hoa's English: Pre toeic, TOEIC A + ► Target OUTPUT : 400-450 + listening
          reading; 70-110 + Speaking; 70-110 + Writing after 4 months ► Center Commitments: Takes
          basic regain root, inspires every while to class Reaching 400-450 + listening readings;
          70-110 + Speaking; 70-110 + Writing after course Full finishing 4
          Listening-speaking-reading-writing skills FREE School If the student fails to reach the{" "}
          <br />
          ►
          <br />
          Student Engagement: to reach the student's point of view to make Go to school in full
          <br />
          class sessions Full and hard homework On the academic working class as instructed by the
          teacher
        </Text>
      </div>
    </Screen>
  )
}
