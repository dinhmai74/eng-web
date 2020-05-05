import { Divider as MDivider, DividerProps } from "@material-ui/core"
import React from "react"

interface Props extends DividerProps {}

export const Divider: React.FC<Props> = (props) => {
  return <MDivider {...props} className={"!bg-gray-200"} />
}
