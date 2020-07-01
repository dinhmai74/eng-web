import cx from "classnames"
import React from "react"
import { BookInfo } from "./BookItem.d"
import { ImageWithFetch } from "components"
import { useHistory } from "react-router-dom"
import { strings } from "tools"

interface BookItemProps {
  book: API.ProductData
  className?: string
  [rest: string]: any
}

export const BookItem: React.FC<BookItemProps> = (props) => {
  const { book, className, ...rest } = props
  if (!book) return null
  const {
    id,
    info,
    rate,
    price,
    discount,
    provider: authors,
    productName: title,
    thumbnailId,
  } = book
  const { descriptions } = info
  const description = descriptions[0] || ""
  const history = useHistory()

  // return null
  const descMaxLength = 70
  const descriptionDisplay: string = description
    ? `${description.substring(0, descMaxLength)} ${description.length > descMaxLength && "..."}`
    : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
  // const authorsDisplay: string[] = authors || ["Martin Bryant", "Estelle Garcia"]

  return (
    <div
      className={cx(
        "flex p-8 px-12 rounded-lg cursor-pointer hover:shadow-card hover:scale-105 transform transition duration-150 ease-in-out",
        className,
      )}
      onClick={() => {
        history.push(strings.routeDetailBook + id)
      }}
      {...rest}
    >
      <div className="w-50">
        <ImageWithFetch imgId={thumbnailId} alt="thumbnail" className="object-cover w-full h-48" />
      </div>
      <div className={"text-gray-700 px-8"}>
        <p className="mb-2 text-xl font-semibold text-gray-800">{title}</p>

        <div className="inline-block mb-4">
          <p className="inline-block mr-2 textgray-500">By: </p>
          {/*// {authorsDisplay.map((v, i) => {
            // const hasComma = authorsDisplay.length !== 1 && i !== authorsDisplay.length - 1
            // return (
              // <p className="inline-block">
                // {v}
                // {hasComma && ", "}
              // </p>
            // )
          // })}
      */}

          <p className="inline-block">{authors}</p>
        </div>
        <p className="text-sm text-gray-600">{descriptionDisplay}</p>
      </div>
    </div>
  )
}
