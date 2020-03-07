import {
  FindCourseScreen,
  FreeTest,
  GeneralCourse,
  HomeScreen,
  TestQuestion,
  WhyChoseUs
} from 'containers'
import StudentExperience from 'containers/student-experience-screen/StudentExperience'
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
    first: 'home',
    second: 'page',
    Component: HomeScreen
  },
  {
    path: strings.routeWhyChoseUs,
    first: 'chose',
    second: 'us',
    Component: WhyChoseUs
  },
  {
    path: strings.routeFindCourse,
    first: 'find',
    second: 'course',
    Component: FindCourseScreen
  },
  {
    path: strings.routeFreeTest,
    first: 'free',
    second: 'tests',
    Component: FreeTest
  },
  {
    path: strings.routeGeneralCourse,
    first: 'general',
    second: 'course',
    Component: GeneralCourse
  },
  {
    path: strings.routeRegister,
    first: 'register',
    second: '',
    Component: StudentExperience
  },
]
