import cx from "classnames"
import React from "react"
import { ChevronLeft as ArrowBackIos, ChevronRight as ArrowForwardIos } from "react-feather"
import ScrollMenu from "react-horizontal-scrolling-menu"
import { animated } from "react-spring"
import { useCss } from "react-use"
import styled from "styled-components"
import { v4 } from "uuid"
import { useHoverEffect } from "utils/animations/useAnimations"

interface Props {
  className?: string
  onChange: (paymentProvider: PaymentProvider) => void
}

export const PaymentMethods: React.FC<Props> = (props) => {
  const { className, onChange } = props
  const [selectedIdx, setUselectedIdx] = React.useState<number>(-1)

  const setSelected = (idx: number) => {
    setUselectedIdx(idx)
    onChange(paymentProvider[idx])
  }

  const data = ListMethods(setSelected, selectedIdx)
  return (
    <div className={className}>
      <p className="text-2xl text-gray-700">Methods: </p>

      <ScrollMenu
        alignCenter={false}
        data={data}
        arrowLeft={ArrowLeft()}
        arrowRight={ArrowRight()}
        useButtonRole={false}
      />
    </div>
  )
}

const baseURL = process.env.PUBLIC_URL + "/asset/images/payment/"
const paymentSrc: any[] = [
  baseURL + "meo.png",
  baseURL + "acb.png",
  baseURL + "visa.png",
  baseURL + "vietcom@3x.png",
  baseURL + "mb@3x.png",
  baseURL + "city.png",
]

export interface PaymentProvider {
  id: string
  name: string
}
const paymentProvider: PaymentProvider[] = [
  {
    id: v4(),
    name: "Meo meo",
  },
  {
    id: v4(),
    name: "Acb bank",
  },
  {
    id: v4(),
    name: "Visa ",
  },
  {
    id: v4(),
    name: "Vietcombank",
  },
  {
    id: v4(),
    name: "MB bank",
  },
  {
    id: v4(),
    name: "City bank",
  },
]

const ArrowLeft = () => <ArrowBackIos />
const ArrowRight = () => <ArrowForwardIos />

const ListMethods = (onChange: (idx: number) => void, selectedIdx?: number) => {
  return paymentSrc.map((val, idx) => {
    return (
      <PaymentCard key={val} val={val} idx={idx} onChange={onChange} selectedIdx={selectedIdx} />
    )
  })
}

const PaymentCard: React.FC<{
  selectedIdx?: number
  idx: number
  val: string
  onChange: (idx: number) => void
}> = ({ selectedIdx, idx, val, onChange }) => {
  const [props, set, calc, trans] = useHoverEffect()
  let hlight = ""
  if (selectedIdx === idx) {
    hlight += " border border-solid"
  } else if (selectedIdx !== -1) {
    hlight = " opacity-25"
  }
  const className = useCss({
    minWidth: "140px",
    minHeight: "80px",
  })
  return (
    <animated.div
      className={cx(
        "max-w-sm rounded overflow-hidden shadow-card cursor-pointer  my-12 mx-8 !outline-none border-orange-500",
        className,
        hlight,
      )}
      key={idx}
      onClick={() => onChange(idx)}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <StyledImg src={val} alt="logo" className="mx-8 my-4 !outline-none" />
    </animated.div>
  )
}

const StyledImg = styled.img`
  display: block;
  max-width: 90px;
  max-height: 50px;
  width: auto;
  height: auto;
  margin: auto;
`
