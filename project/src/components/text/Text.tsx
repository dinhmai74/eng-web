import cx from "classnames"
import { tran } from "localization/i18n"
import React from "react"

interface TextProps {
  className?: string
  text?: string
  children?: string
}

export const Text: React.FC<TextProps> = ({ className, children, text }) => {
  let tx: string
  if (text) tx = tran(text)
  else {
    tx = tran(children)
  }

  const txArr = tx.split("\n")

  if (txArr.length <= 1) return <p className={cx("text-gray-800 leading-loose", className)}>{tx}</p>

  return (
    <>
      {txArr.map((v: string, i) => {
        if (v === "") return <br />
        const strongRex = /<b>(.*?)<\/b>/g
        // const strongTags = .exec(v)
        // const results: any[] = []
        // const stringsRs: string[] = []
        // let cloneString = v
        // // while ((match = strongRex.exec(v))) {
        // results.push(match)
        // stringsRs.push(cloneString.slice(lastIndex, match.index))
        // cloneString = cloneString.slice(match.index + match[0].length, cloneString.length)
        // }
        const strongResults = v.split(strongRex)
        // console.log("abc", abc)

        // let time = 0
        // while (cloneString.length > 0 && time < 10) {
        // const match = strongRex.exec(cloneString)
        // if (match) {
        // results.push(match)
        // stringsRs.push(cloneString.slice(0, match.index))
        // cloneString = cloneString
        // .slice(match.index + match[0].length, cloneString.length)
        // .toString()
        // } else {
        // // console.log("match", match)
        // stringsRs.push(cloneString)
        // console.log("cloneString", cloneString)
        // // cloneString = ""
        // }
        // time++
        // }
        // console.log("stringsRs", stringsRs)
        // console.log("results[0]", results)

        return (
          <p className={cx("text-gray-800 leading-loose", className)} key={i}>
            {strongResults.map((text, i) => {
              if (i % 2 !== 0) return <b>{text} </b>
              return text
            })}
          </p>
        )
      })}
    </>
  )
}
