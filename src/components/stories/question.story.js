import React from "react"
import { storiesOf } from "@storybook/react"

import Question from "../Question/Question"
import CustomCheckbox from "../Question/CustomCheckbox"
storiesOf("Question form", module).add("default", () => <Question />)
