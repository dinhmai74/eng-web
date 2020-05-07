import cx from "classnames"
import React from "react"
import { BookInfo } from "./BookItem.d"

interface BookItemProps {
  book: BookInfo
  className: string
  [rest: string]: any
}

export const BookItem: React.FC<BookItemProps> = (props) => {
  const { book, className, ...rest } = props
  if (!book) return null
  const { volumeInfo } = book
  const { description, title, authors, imageLinks } = volumeInfo

  // return null
  const descMaxLength = 50
  const descriptionDisplay: string = description
    ? `${description.slice(0, descMaxLength)} ${description.length > descMaxLength && "..."}`
    : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
  const authorsDisplay: string[] = authors || ["Martin Bryant", "Estelle Garcia"]

  return (
    <div
      className={cx(
        "flex p-8 px-12 rounded-lg cursor-pointer hover:shadow-card hover:scale-105 transform transition duration-150 ease-in-out",
        className,
      )}
      {...rest}
    >
      <img src={imageLinks.smallThumbnail} alt="thumbnail" className="h-40" />

      <div className={"text-gray-700 px-8"}>
        <p className="mb-2 text-xl font-semibold text-gray-800">{title}</p>

        <div className="inline-block mb-4">
          <p className="textgray-500 mr-2 inline-block">By: </p>
          {authorsDisplay.map((v, i) => {
            const hasComma = authorsDisplay.length !== 1 && i !== authorsDisplay.length - 1
            return (
              <p className="inline-block">
                {v}
                {hasComma && ", "}
              </p>
            )
          })}
        </div>
        <p className="text-sm text-gray-600">{descriptionDisplay}</p>
      </div>
    </div>
  )
}
