import { RowTextSpaceBetween } from "components"
import React from "react"
import { formatMoney } from "tools"

interface Props {
  className?: string
  value?: string
  [rest: string]: any
}

export const FeeRow: React.FC<Props> = (props) => {
  const { className, value, ...rest } = props
  return (
    <RowTextSpaceBetween
      leftTx="Fee:"
      leftClassName="text-blueGrey font-medium"
      rightTx={value || formatMoney(0)}
      rightClassName="font-medium"
      className={className}
      {...rest}
    />
  )
}
