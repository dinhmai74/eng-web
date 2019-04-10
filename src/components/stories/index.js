import React from "react"

import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"

import { Welcome } from "@storybook/react/demo"
import { Button } from "semantic-ui-react"
import "semantic/dist/semantic.min.css"

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

storiesOf("Button", module)
  .add("with text", () => (
    <Button primary onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
