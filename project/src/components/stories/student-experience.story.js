import React from "react";
import { storiesOf } from "@storybook/react";

import StudentExperience from "../../containers/student-experience-screen/StudentExperience";
import FormInput from "../FormInput/FormInput";
storiesOf("StudentExperience form", module).add("default", () => (
  <StudentExperience />
));
