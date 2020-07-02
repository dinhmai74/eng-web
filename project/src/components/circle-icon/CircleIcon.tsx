import cx from "classnames"
import React from "react"

interface CircleIconProps {
  className?: string
  [rest: string]: any
}

export const CircleIcon: React.FC<CircleIconProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cx(
        "rounded-full p-4 inline-block cursor-pointer",
        {
          "bg-black": true,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

