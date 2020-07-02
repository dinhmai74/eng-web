import { Button } from "@material-ui/core"
import cx from "classnames"
import { AppCard, TextInputWithIcon, CircleIcon } from "components"
import moment from "moment"
import { useSnackbar } from "notistack"
import React from "react"
import { Check, CreditCard, Edit2, MapPin, Phone, User, X } from "react-feather"
import { useForm } from "react-hook-form"
import { useMutation, queryCache } from "react-query"
import { useHistory } from "react-router-dom"
import { placeOrder, useGetProductsByIdsQuery } from "services/api"
import { typography } from "themes"
import { formatMoney, strings } from "tools"
import { useAccountStore } from "zustands"

const calcPrice = (products: any): number => {
  if (!products) return 0
  let price = 0
  products.forEach((v) => {
    if (v!.amount && v!.product) price += v!.amount * v!.product!.price
  })
  return price
}

type Inputs = {
  name: string
  address: string
  phoneNumber: string
  payment: string
}

export const OrderSidebar: React.FC<{ cart: API.Cart[] }> = ({ cart }) => {
  const history = useHistory()
  const { account } = useAccountStore()
  // const { addresses } = account
  const productsIds = cart.map((v) => v.productId)
  const { enqueueSnackbar } = useSnackbar()
  // const { updateLength } = useCartStore()
  const { data: products, isFetching } = useGetProductsByIdsQuery(productsIds)

  const [mutOrder] = useMutation(placeOrder, {
    onError(e) {
      enqueueSnackbar(e, { variant: "warning" })
    },
    onSuccess() {
      enqueueSnackbar("Order successfully")
      queryCache.invalidateQueries("get-cart-length")
      history.push(strings.routeHome)
    },
  })

  // const firstAddress = addresses?.length > 0 ? addresses[0] : undefined

  const { register, handleSubmit, setValue, getValues, errors } = useForm<Inputs>({
    defaultValues: {
      name: account!.name,
      address: "",
      phoneNumber: account!.phoneNumber,
      payment: "COD",
    },
  })

  React.useEffect(() => {
    register({ name: "address" }) // custom register react-select
  }, [register])

  const [editReceiverInfo, setEditReceiver] = React.useState(false)
  const [editPayment, setEditPayment] = React.useState(false)

  if (isFetching) return null

  const productsWithPrice: any = products!.map((v) => {
    const item = cart.find((c) => c.productId === v.id)
    return {
      amount: item!.amount,
      product: v,
    }
  })
  const subtotal = calcPrice(productsWithPrice)
  const totalPrice = subtotal - subtotal * 0

  const onSubmit = (data: Inputs) => {
    const inputData: API.OrderInput = {
      receiverAddress: data.address,
      note: "nothing",
      cashType: data.payment,
      orderDate: new Date(),
      name: data.name,
      phone: data.phoneNumber,
    }
    mutOrder(inputData)
  }

  return (
    <div className="z-50 w-2/3 ">
      {/* [> icon close<] */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-8">
          <AppCard className="max-w-md rounded-3xl">
            <CardTitle
              title="Shiping information:"
              onClick={() => setEditReceiver((p) => !p)}
              Icon={editReceiverInfo ? Check : Edit2}
            />

            <br />
            <br />
            <TextInputWithIcon
              disabled={!editReceiverInfo}
              Icon={User}
              register={register}
              required
              formName="name"
              error={errors.name ? errors.name.message : null}
            />
            <br />
            <div className="flex ">
              <MapPin className={cx("text-purple-500 mr-3")} />
              <input
                disabled={!editReceiverInfo}
                name={"address"}
                className={cx("bg-transparent outline-none text-gray-800", {
                  "border-b border-gray-300 pb-1 focus:border-primary": editReceiverInfo,
                })}
                ref={register({
                  required: "Required",
                })}
              />
              {errors.address && <p className={"text-red-500"}>{errors.address.message}</p>}
            </div>
            <br />
            <TextInputWithIcon
              disabled={!editReceiverInfo}
              Icon={Phone}
              register={register}
              formName="phoneNumber"
              error={errors.phoneNumber ? errors.phoneNumber.message : null}
              required
            />
          </AppCard>
          {/* [> info card <] */}

          <AppCard className="max-w-md my-8 rounded-3xl">
            <CardTitle
              title="Payment:"
              Icon={editPayment ? Check : Edit2}
              onClick={() => setEditPayment((p) => !p)}
            />
            <br />
            <br />
            <TextInputWithIcon
              Icon={CreditCard}
              text={"COD"}
              disabled={!editPayment}
              required
              register={register}
              formName="payment"
              error={errors.payment ? errors.payment.message : null}
            />
            <br />
          </AppCard>

          <div className={cx("flex flex-col text-gray-700", typography.h6)}>
            <div className="flex justify-between">
              <p>Expeceted delivery date:</p>
              <p className="text-right">{moment().format("DD/MM/YYYY")}</p>
            </div>

            <br />
            <br />

            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p className="text-right">{formatMoney(subtotal)}</p>
            </div>
            <br />

            <div className="flex justify-between">
              <p>Fee:</p>
              <p className="text-right">0%</p>
            </div>

            <br />
            <br />

            <div className="flex justify-between font-semibold">
              <p>Total price: </p>
              <p className="text-right">{formatMoney(totalPrice)}</p>
            </div>

            <div className="w-full mx-auto my-12 border border-gray-300"></div>

            <div className="flex justify-end font-semibold">
              <Button
                variant="contained"
                color="primary"
                className="!font-semibold !rounded-xl"
                type="submit"
              >
                Place your order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

function CardTitle({
  title,
  onClick,
  Icon,
}: {
  title: string
  onClick?: () => void
  Icon: React.ElementType
}) {
  return (
    <div className="flex justify-between">
      <p className={typography.h5}>{title}</p>
      <Icon className="!text-gray-600 cursor-pointer" onClick={onClick} />
    </div>
  )
}
