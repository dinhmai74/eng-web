import * as emailjs from 'emailjs-com'

export interface IFeedbackData {
  customerName: string
  customerEmail: string
  customerPhone: string
  customerMessage: string
}

export const EmailHelper = {
  sendFeedBack: (feedbackData: IFeedbackData) => {
    const {
      customerEmail,
      customerMessage,
      customerName,
      customerPhone,
    } = feedbackData
    emailjs
      .send(
        'gmail',
        'feedback',
        {
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
          customer_messages: customerMessage,
        },
        'user_yrsSjY5GDwl3jHmicFeQ0',
      )
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err
        },
      )
  },
}
