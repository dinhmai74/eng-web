export const emailRex: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const notEmptyRex: RegExp = /.+/

export const formatMoney = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})
