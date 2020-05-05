import cx from "classnames"
import React from "react"

interface ScreenProps {
  className?: string
  [rest: string]: any
}

export const Screen: React.FC<ScreenProps> = ({ className, children, ...rest }) => {
  return (
    <div className={cx("min-h-screen px-24 pr-0 pt-8 py-24", className)} {...rest}>
      {children}
    </div>
  )
}
