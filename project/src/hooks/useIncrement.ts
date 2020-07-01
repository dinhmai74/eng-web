import * as React from "react"

export const useIncrement = (init = 0) => {
  const [value, setValue] = React.useState<number>(init)
  const increase = () => {
    setValue((p) => p + 1)
  }
  const decrease = () => {
    if (value !== 0) setValue((p) => p - 1)
  }
  return { value, setValue, increase, decrease }
}

