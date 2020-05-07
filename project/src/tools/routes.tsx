import {
  FindCourseScreen,
  FreeTest,
  GeneralCourse,
  HomeScreen,
  TestQuestion,
  WhyChoseUs,
  CoursePaymentScreen,
  CourseSuggestDetailScreen,
  CourseDetailScreen,
  CoursePurchaseSuccessfullyScreen,
  BookGeneralScreen,
} from "containers"
import StudentExperience from "containers/student-experience-screen/StudentExperience"
import { strings } from "./strings"

export interface NavRoute {
  path: string
  first: string
  second: string
  Component?: any
}

export interface Route {
  path: string
  Component: any
}

export const navRoutes: NavRoute[] = [
  {
    path: strings.routeHome,
    first: "home",
    second: "page",
    Component: HomeScreen,
  },
  {
    path: strings.routeWhyChoseUs,
    first: "chose",
    second: "us",
    Component: WhyChoseUs,
  },
  {
    path: strings.routeFindCourse,
    first: "find",
    second: "course",
    Component: FindCourseScreen,
  },
  {
    path: strings.routeFreeTest,
    first: "free",
    second: "tests",
    Component: FreeTest,
  },
  {
    path: strings.routeGeneralCourse,
    first: "general",
    second: "course",
    Component: GeneralCourse,
  },
  {
    path: strings.routeBook,
    first: "book",
    second: "",
    Component: BookGeneralScreen,
  },

  {
    path: strings.routeRegister,
    first: "",
    second: "register",
    Component: StudentExperience,
  },
]

export const routes: Route[] = [
  {
    path: `${strings.routePaymentCourse}/:id`,
    Component: CoursePaymentScreen,
  },
  {
    path: `${strings.routeSugestionCourse}/:id`,
    Component: CourseSuggestDetailScreen,
  },
  {
    path: `${strings.routeDetailCourse}/:id`,
    Component: CourseDetailScreen,
  },
  {
    path: `${strings.routeCoursePurchaseSuccessfully}/:id`,
    Component: CoursePurchaseSuccessfullyScreen,
  },
]
