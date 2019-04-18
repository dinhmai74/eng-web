import React from "react"
import { storiesOf } from "@storybook/react"
import { tran } from "localization/i18n"
import { images } from "themes"
import GeneralCourse from "../../containers/course-progress/CourseProgressScreen"

storiesOf("Course", module).add("CourseProgress", () => <GeneralCourse />)
