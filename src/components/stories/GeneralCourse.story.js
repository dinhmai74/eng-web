import React from "react"
import { storiesOf } from "@storybook/react"

import GeneralCourse from "../../containers/general-course-screen/GeneralCourse"
import Overview from "../../containers/general-course-screen/components/Overview"
storiesOf("GeneralCourse form", module).add("default", () => <GeneralCourse />)
