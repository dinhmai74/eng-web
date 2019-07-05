import * as Yup from 'yup'

let daysFields
daysFields = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]

const validationSchema = {
  pill_name: Yup.object().shape({
    pill_name: Yup.string().required('Informe o nome do remédio'),
    date: Yup.string().required('Informe o dia'),
    time: Yup.string().required('Informa o horário')
  }),
  notify: Yup.object().shape({
    date: Yup.string().required('Informe o dia'),
    time: Yup.string().required('Informa o horário'),
    notify: Yup.string().required('Selecione uma frequência')
  }),
  first_name: Yup.string().required('Not empty string')
}

export default validationSchema
