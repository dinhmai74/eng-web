import React from "react";
import { tran } from "localization/i18n";
import { images } from "themes/index";

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
import { Button,SemanticCOLORS, } from "semantic-ui-react"
import "semantic/dist/semantic.min.css";
import "App.css";
import { storiesOf } from "@storybook/react"
import styled from "styled-components"


import { oneOf } from "prop-types";
import ReasonChoseUsScreen from "containers/why-chose-us/reason-chose-us-screen/index";
import UniqueMethod from "containers/why-chose-us/unique-method/index";
import Block from "components/Block/index";

import 'semantic/dist/semantic.min.css'
import 'App.css'

import './footer.story'
import './InformationForm.story'
import './menu.story'
import './course-progress.story'
import "./payment.story";
import "./benefit.story";
import "./certificate.story";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

const themes = ["primary", "secondary"];
const colors: SemanticCOLORS[] = ["red", "black", "blue", "brown", "green"];

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
