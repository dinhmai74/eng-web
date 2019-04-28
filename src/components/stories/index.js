import React from "react";

import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
  array,
} from "@storybook/addon-knobs"
import { Welcome } from "@storybook/react/demo"
import { Button, } from "semantic-ui-react"
import "semantic/dist/semantic.min.css";
import "App.css";
import { storiesOf } from "@storybook/react"


import 'semantic/dist/semantic.min.css'
import 'App.css'

import './step.story'
import './footer.story'
import './InformationForm.story'
import './menu.story'
import "./payment.story";
import "./benefit.story";
import "./certificate.story";
import "./CustomFlipNumber.story"
import "./GeneralCourse.story"
import "./question.story"
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

const themes = ["primary", "secondary"];

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("with theme", () => (
    <React.Fragment>
      <Button>Default</Button>
      <button className="ui button primary">Primary</button>
      <Button secondary>secondary</Button>
    </React.Fragment>
  ))
  .add("playground", () => (
    <Button
      onClick={action("button clicked")}
      loading={boolean("loading", false)}
      big={boolean("big", true)}
      style={object("style", {})}
      color={select("color", colors, "red")}
    >
      {text("label", "Hello Button")}
    </Button>
  ));
