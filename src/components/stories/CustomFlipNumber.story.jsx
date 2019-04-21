import React from "react";
import { storiesOf } from "@storybook/react";
import CustomFlipNumber from "containers/home-screen/components/ArchivedOverview/components/CustomFlipNumber";

storiesOf("Flip number", module)
    .add("default",
        () => <CustomFlipNumber numberVal={123} textVal={'hello world'}/>);
