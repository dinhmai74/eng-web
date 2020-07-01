const baseURL = process.env.PUBLIC_URL
export const strings = {
  routeHome: baseURL + "/",
  routeFindCourse: baseURL + "/find-course",
  routeWhyChoseUs: baseURL + "/chose-us",
  // routeTest: '/free-test',
  routeGeneralCourse: baseURL + "/general-course",
  routeFreeTest: baseURL + "/free-test",
  routeRegister: baseURL + "/register",
  routeSugestionCourse: baseURL + "/sugestion-course",
  routeDetailCourse: baseURL + "/detail-course",
  routePaymentCourse: baseURL + "/payment/course",
  routeCoursePurchaseSuccessfully: baseURL + "/purchase-success/course",
  routeBook: baseURL + "/book",
  routeDetailBook: baseURL + "/book-detail/",

  formatDateDisplayWithTime: "hh:mm a - DD/MM/YYYY",
  formatDateDisplay: "DD-MM-YYYY",
  token: "token",
}

export const base64ToImg = (base64: string) => `data:image/png;base64,${base64}`
// export const formatMoney = (money: number) => {
// return `$${money}`

// }

export const formatMoney = (money: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money)
