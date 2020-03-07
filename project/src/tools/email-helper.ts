import { IRegisterInputState } from 'components/FormInput/FormInput'
import * as emailjs from 'emailjs-com'

const USER_ID = 'user_yrsSjY5GDwl3jHmicFeQ0'

export interface IFeedbackData {
  customerName: string
  customerEmail: string
  customerPhone: string
  customerMessage: string
}

export const EmailHelper = {
  sendFeedBack: async (feedbackData: IFeedbackData) => {
    const {
      customerEmail,
      customerMessage,
      customerName,
      customerPhone,
    } = feedbackData
    const result = await emailjs.send(
      'gmail',
      'feedback',
      {
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        customer_messages: customerMessage,
      },
      USER_ID,
    )
    return result
  },
  register: async (registerData: IRegisterInputState) => {
    const { age, email, name, phone, place } = registerData
    return await emailjs
      .send(
        'gmail',
        'register',
        {
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          customer_age: age,
          customer_place: place,
        },
        USER_ID,
      )
  },
}
