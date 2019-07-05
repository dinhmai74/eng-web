import React from "react";
import { storiesOf } from "@storybook/react";

import FreeTest from " ../../containers/free-tests-screen/FreeTest";
import MenuItem from "../MenuItem/MenuItem";
import OptionalTest from "../OptionalTest/OptionalTest";
storiesOf("FreeTest form", module).add("default", () => <FreeTest />);
