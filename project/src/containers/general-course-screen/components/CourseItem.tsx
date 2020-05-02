import cx from "classnames"
import { Text } from "components"
import React from "react"
import { useHistory } from "react-router-dom"
import { strings } from "tools"

export interface GeneralCourseItem {
  id: string
  imgUri: any
  title: string
  content: string
  className?: string
}

interface CourseItemProps extends GeneralCourseItem {}

export const CourseItem: React.FC<CourseItemProps> = (props) => {
  const size = 200
  const { imgUri, title, content, className, id } = props
  const history = useHistory()
  return (
    <div
      className={cx("flex bg-white p-12 inline-block hover:shadow-lg cursor-pointer ", className)}
      onClick={() => history.push(strings.routeSugestionCourse + "/" + id)}
    >
      <div>
        <img src={imgUri} width={size} height={size} />
      </div>
      <div className="py-8 px-12 flex flex-col">
        <Text className="text-4xl font-semibold">{title}</Text>
        <br />
        <Text className="text-gray-600">{content}</Text>
      </div>
    </div>
  )
}
