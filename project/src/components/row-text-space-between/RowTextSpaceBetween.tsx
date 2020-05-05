import cx from "classnames"
import React from "react"

export interface RowTextSpaceBetweenProps {
  leftTx: string
  rightTx: string
  rightClassName?: string
  leftClassName?: string
  className?: string
}

export const RowTextSpaceBetween: React.FC<RowTextSpaceBetweenProps> = (props) => {
  const { leftTx, rightTx, leftClassName, rightClassName, className } = props
  return (
    <div className={cx("flex justify-between ", className)}>
      <p className={cx("text-gray-500 font-semibold mx-2 ", leftClassName)}>{leftTx}</p>
      <p className={cx("text-gray-800 self-end mx-2 ", rightClassName)}>{rightTx}</p>
    </div>
  )
}
