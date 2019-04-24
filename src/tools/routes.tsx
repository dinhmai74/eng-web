import {
  FindCourseScreen,
  HomeScreen,
  WhyChoseUs,
  TestScreen,
  GeneralCourse
} from 'containers'
import { tran } from 'localization/i18n'
import { strings } from './strings'

export interface IRoute {
 path: string,
 first: string,
 second: string,
 Component?: any
}

export const routes: IRoute[] = [
  {
    path: strings.routeHome,
    first: tran('home'),
    second: tran('page'),
    Component: HomeScreen
  },
  {
    path: strings.routeWhyChoseUs,
    first: tran('chose'),
    second: tran('us'),
    Component: WhyChoseUs
  },
  {
    path: strings.routeFindCourse,
    first: tran('find'),
    second: tran('course'),
    Component: FindCourseScreen
  },
  {
    path: strings.routeTest,
    first: tran('free'),
    second: tran('tests'),
    Component: TestScreen
  },
  {
    path: strings.routeGeneralCourse,
    first: tran('general'),
    second: tran('course'),
    Component: GeneralCourse
  }
]
