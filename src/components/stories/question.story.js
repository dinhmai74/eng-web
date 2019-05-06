import React from "react"
import { storiesOf } from "@storybook/react"

import CustomCheckbox from "../Question/CustomCheckbox"
import TestQuestion from "../../containers/test-screen/TestQuestion"
storiesOf("TestQuestion form", module).add("default", () => <TestQuestion />)
