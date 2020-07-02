import React from "react"
import { Screen } from "components"
import { useQueryGetCart } from "services/api"
import { OrderItem } from "./OrderItem"
import { OrderSidebar } from "./OrderSidebar"

interface OrderGeneralScreenProps {}

export const OrderGeneralScreen: React.FC<OrderGeneralScreenProps> = (props) => {
  const { data: cart, isFetching, refetch } = useQueryGetCart()
  if (isFetching) return null
  if (!cart) return <Screen>nothing here</Screen>
  const isEmpty = cart!.products!.length <= 0

  if (isEmpty || !cart!.products) return <Screen>nothing here</Screen>
  return (
    <Screen className="flex justify-between">
      <div className="flex-1">
        {cart!.products!.map((v, i) => {
          return <OrderItem item={v} key={v.productId} />
        })}
      </div>
      <div className="flex flex-1">
        <div className="w-1 h-full mr-20 bg-gray-100"></div>
        <OrderSidebar cart={cart!.products} />
      </div>
    </Screen>
  )
}
