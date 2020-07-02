import { Button } from "@material-ui/core"
import cx from "classnames"
// import { addCart } from "apis/cart.api"
import { useIncrement } from "hooks/useIncrement"
import { useSnackbar } from "notistack"
import React from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { IoIosAdd, IoIosRemove } from "react-icons/io"
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti"
import { queryCache, useMutation } from "react-query"
import { addCart } from "services/api"
import { typography } from "themes"
import { formatMoney } from "tools"
import { calcRating } from "utils"

interface ProductInfoProps {
  product: API.ProductData
}

const renderStar = (amount: number, Star: any) => {
  const list = new Array(amount).fill(0)
  return list.map((_, i) => {
    return (
      <div key={i}>
        <Star className="text-primary" />
      </div>
    )
  })
}

export const ProductInfo: React.FC<ProductInfoProps> = (props) => {
  const { productName: title, info, price, rate: rating, id } = props.product
  const { enqueueSnackbar } = useSnackbar()
  const descConv = info.descriptions
  const starRs = calcRating(rating)
  const commentCount = 10

  const { value: selectedQuantity, increase: insQuantity, decrease: descQuantity } = useIncrement(1)
  const onError = (e) => {
    console.log("e", e)
    enqueueSnackbar(e, {
      variant: "warning",
    })
  }

  const [mutAddCart] = useMutation(addCart, {
    onError,
    onSuccess() {
      enqueueSnackbar("Add to cart successfully")
      queryCache.invalidateQueries("get-cart-length")
    },
  })
  /* ------------- renders ------------- */
  const iconsClasses = "cursor-pointer"

  return (
    <div className="flex flex-col w-2/3">
      <p className={cx("text-gray-700", typography.h4)}>{title}</p>
      <br />

      <div className="flex">
        <div className="flex">
          {renderStar(starRs.fullStars, TiStarFullOutline)}
          {renderStar(starRs.halfStars, TiStarHalfOutline)}
          {renderStar(starRs.noneStars, TiStarOutline)}
        </div>
        <p className="ml-4 text-purple-700">( {commentCount} comments )</p>
      </div>
      <br />

      <p className={cx("text-orange-500", typography.h3)}>Price: {formatMoney(price)}</p>
      <br />

      <div>
        {descConv.map((v, i) => (
          <p key={i} className="mb-2 text-gray-600">
            - {v}
          </p>
        ))}
      </div>

      <div className="flex my-8">
        <div className="px-8 py-2 mr-12 text-gray-800 border border-gray-600">
          <p className="mb-2 text-gray-800">Quantity</p>
          <div className="flex items-center justify-between pb-2">
            <IoIosRemove onClick={descQuantity} className={iconsClasses} />
            {selectedQuantity}
            <IoIosAdd onClick={insQuantity} className={iconsClasses} />
          </div>
        </div>
        <Button
          color="primary"
          variant="contained"
          startIcon={<AiOutlineShoppingCart />}
          onClick={() =>
            mutAddCart({
              productId: id,
              amount: Number(selectedQuantity),
            })
          }
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}
