import cx from "classnames"
import React from "react"

interface ScreenProps {
  className?: string
}

export const Screen: React.FC<ScreenProps> = ({ className, children }) => {
  return <div className={cx("min-h-screen pl-24 pt-8", className)}>{children}</div>
}
