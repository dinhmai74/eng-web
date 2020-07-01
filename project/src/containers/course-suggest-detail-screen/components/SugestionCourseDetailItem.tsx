import cx from "classnames"
import { Text } from "components"
import React from "react"
import { useHistory } from "react-router-dom"
import { formatMoney, strings } from "tools"

export interface SugestionCourseDetailItem {
  id: string
  imgUri: any
  title: string
  content: string
  generalCourseId: string
  price: number
  className?: string
}

interface SugestionCourseDetailItemProps extends SugestionCourseDetailItem {}

export const SugestionCourseDetailItem: React.FC<SugestionCourseDetailItemProps> = (props) => {
  const { id, imgUri, title, content, className, price } = props
  const size = 250
  const history = useHistory()
  return (
    <div
      className={cx(
        "flex bg-white px-12 pb-8 inline-block hover:shadow-lg cursor-pointer w-full mb-24",
        className,
      )}
      onClick={() => history.push(strings.routeDetailCourse + "/" + id)}
    >
      <img src={imgUri} alt="thumbnail" className="mr-8 w-48 " />
      <div className=" text-gray-600 inline-block px-24 py-8 ">
        <Text className="text-gray-800 font-semibold text-2xl">{title}</Text>
        <Text className="text-gray-500 font-semibold text-orange-500">{formatMoney(price)}</Text>
        <br />
        <Text text={content} />
      </div>
    </div>
  )
}
