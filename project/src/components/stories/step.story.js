import React from "react";
import { storiesOf } from "@storybook/react";
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';

import Certificate from "containers/why-chose-us/certificate/index";

storiesOf("Stepp", module).add("default", () => (
  <Steps current={1}>
    <Steps.Step title="first" />
    <Steps.Step title="second" />
    <Steps.Step title="third" />
  </Steps>
));
