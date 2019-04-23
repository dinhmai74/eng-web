import {
  FindCourseScreen,
  HomeScreen,
  WhyChoseUs,
  TestScreen,
  GeneralCourse
} from 'containers'
import { tran } from 'localization/i18n'
import { strings } from './strings'

export const routes = [
  {
    path: strings.routeHome,
    first: tran('home'),
    second: tran('page'),
    Component: HomeScreen
  },
  {
    path: strings.routeFindCourse,
    first: tran('find'),
    second: tran('course'),
    Component: FindCourseScreen
  },
  {
    path: strings.routeWhyChoseUs,
    first: tran('chose'),
    second: tran('us'),
    name: 'chose us',
    Component: WhyChoseUs
  },
  {
    path: strings.routeTest,
    first: tran('free'),
    second: tran('tests'),
    name: 'test',
    Component: TestScreen
  },
  {
    path: strings.routeGeneralCourse,
    first: tran('general'),
    second: tran('course'),
    name: 'general course',
    Component: GeneralCourse
  }
]
