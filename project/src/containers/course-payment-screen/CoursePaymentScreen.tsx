import cx from "classnames"
import {
  InformationCard,
  PaymentMethods,
  PaymentProvider,
  RowTextSpaceBetween,
  Screen,
  Text,
} from "components"
import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { animated, useSpring } from "react-spring"
import { useMeasure, usePrevious } from "react-use"
import { images } from "themes"
import { formatMoney, strings } from "tools"
import { useScaleAndFadeIn } from "utils/animations/useAnimations"

interface CoursePaymentScreenProps {}

export const CoursePaymentScreen: React.FC<CoursePaymentScreenProps> = (props) => {
  const [payment, setPayment] = React.useState<PaymentProvider | null>(null)
  const { id } = useParams()
  const history = useHistory()

  const onChangeMethods = (item: PaymentProvider) => {
    setPayment(item)
  }
  const animIn = useScaleAndFadeIn()

  const price = 400
  const onSubmit = () => {
    history.push(`${strings.routeCoursePurchaseSuccessfully}/${id}`)
  }

  const [ref, { height: viewHeight }] = useMeasure()
  const isOpen = payment !== null
  console.log("payment", payment)
  const { height, opacity, display } = useSpring({
    from: { height: 0, opacity: 0, display: "none" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      display: isOpen ? "block" : "none",
    },
  })
  const previous = usePrevious(isOpen)
  const bankDivStyle: any = {
    opacity,
    height: isOpen && previous === isOpen ? "auto" : 0,
    display,
  }

  return (
    <Screen style={animIn}>
      <p className="my-4 mt-12 mb-24 text-3xl color-gray-700">Simple payment</p>

      <div className={cx("py-12")}>
        <PaymentMethods onChange={onChangeMethods} />
      </div>

      <div className={cx("flex px-24 justify-around")}>
        <img alt="illu" src={images.illuFly} className="wh-96" />
        <div className="">
          <Text className={cx("mb-6 text-3xl font-semibold")}>common.information</Text>
          <InformationCard
            totalAmount={price}
            onSubmit={onSubmit}
            buttonTx="submit"
            disabledButton={false}
          >
            <RowTextSpaceBetween
              leftTx="Course:"
              leftClassName="font-normal"
              rightTx={"Toeic A 400+"}
              className="mb-8 mt-4"
            />
            <RowTextSpaceBetween
              leftTx="Price:"
              leftClassName="font-normal"
              rightTx={formatMoney(400) + "/ months"}
              className="mb-8 "
            />
            <animated.div ref={ref} style={bankDivStyle}>
              <RowTextSpaceBetween
                leftTx="Bank:"
                leftClassName="font-normal"
                rightTx={payment ? payment.name : "No bank chose"}
                className="mb-8 "
              />
            </animated.div>
          </InformationCard>
        </div>
      </div>
    </Screen>
  )
}
