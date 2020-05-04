import cx from "classnames"
import { tran } from "localization/i18n"
import React from "react"

interface TextProps {
  className?: string
  text?: string
  children?: string | any
}

export const Text: React.FC<TextProps> = ({ className, children, text }) => {
  let tx: string
  if (text) tx = tran(text)
  else {
    if (typeof children !== "string")
      return <p className={cx("text-gray-800 leading-loose", className)}>{children}</p>

    tx = tran(children)
  }

  const txArr = tx.split("\n")

  if (txArr.length <= 1) return renderTextWithWithBoldChecker(tx, className)

  return (
    <>
      {txArr.map((v: string, i) => {
        return renderTextWithWithBoldChecker(v, className)
      })}
    </>
  )
}

const renderTextWithWithBoldChecker = (v: string, className?: string) => {
  if (v === "") return <br />
  const strongRex = /<b>(.*?)<\/b>/g
  const strongResults = v.split(strongRex)
  return (
    <p className={cx("text-gray-800 leading-loose", className)}>
      {strongResults.map((text, i) => {
        if (i % 2 !== 0) return <b>{text} </b>
        return text
      })}
    </p>
  )
}
