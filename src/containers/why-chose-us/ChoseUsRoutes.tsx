import { tran } from 'localization/i18n'
import { IRoute } from 'tools/routes'

export const choseUsRoutes: IRoute[] = [
  {
    first: tran('reason'),
    second: tran('us'),
    path: 'sectionReasonChoseUs'
  },
  {
    first: tran('unique'),
    second: tran('method'),
    path: 'sectionUniqueMethod'
  },
  {
    first: tran('your'),
    second: tran('benefit'),
    path: 'sectionBenefit'
  },
  {
    first: tran('ours'),
    second: tran('certificate'),
    path: 'sectionCertificate'
  },
  {
    first: tran('payment'),
    second: tran('methods'),
    path: 'sectionPayment'
  }
]
