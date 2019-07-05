import React from "react";
import { storiesOf } from "@storybook/react";

import GeneralCourse from "../../containers/general-course-screen/GeneralCourse";
import TestResult from "../../containers/test-result-screen/TestResult";

storiesOf("TestResult form", module).add("default", () => <TestResult />);
