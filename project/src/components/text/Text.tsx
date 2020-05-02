import cx from "classnames"
import { tran } from "localization/i18n"
import React from "react"

interface TextProps {
  className?: string
  text?: string
}

export const Text: React.FC<TextProps> = ({ className, children, text }) => {
  let tx: any
  if (text) tx = tran(text)
  else {
    tx = typeof children === "string" ? tran(children) : children
  }

  return <p className={cx("text-gray-800 leading-loose", className)}>{tx}</p>
}
