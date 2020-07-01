import { FeeRow, Divider, RowTextSpaceBetween } from "components"
import React from "react"
import { useCss } from "react-use"
import { Button } from "semantic-ui-react"
import { formatMoney } from "tools"
import cx from "classnames"
import { Badge } from "@material-ui/core"
import { Text } from "components/text/Text"

interface Props {
  totalAmount: number
  onSubmit: () => void
  disabledButton: boolean
  buttonTx: string
}

export const InformationCard: React.FC<Props> = (props) => {
  const { children, totalAmount, onSubmit, disabledButton, buttonTx } = props

  const cardCn = useCss({
    "@media only screen and (min-width: 728px)": {
      minWidth: "500px",
    },

    "@media (max-width: 728px)": {
      minWidth: "300px",
    },
  })

  return (
    <div>
      <div
        className={cx(" max-w-xs rounded overflow-hidden shadow-card px-8 md:px-16 py-8", cardCn)}
      >
        {children}
        <FeeRow className="my-8" />
        <Divider />

        <RowTextSpaceBetween
          leftTx="Total amount"
          leftClassName="text-gray-600 font-medium"
          className="my-4 mt-8 mb-8 font-medium"
          rightTx={formatMoney(totalAmount)}
          rightClassName="text-primary-500"
        />

        <Button
          onClick={onSubmit}
          fullWidth
          disabled={disabledButton}
          secondary
          className="w-full mt-2 !py-3"
        >
          {buttonTx}
        </Button>
      </div>
    </div>
  )
}
