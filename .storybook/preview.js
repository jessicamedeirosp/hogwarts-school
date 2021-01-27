import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import GlobalStyle from "../src/components/GlobalStyle";

addDecorator((storyFn) => (
    <>
        <GlobalStyle />
        {storyFn()}
    </>
));

const viewports = {
    extraSmall: {
        name: "extraSmall 360x640",
        styles: {
            width: "360px",
            height: "640px",
        },
    },
    small: {
        name: "small (sm) 640x360",
        styles: {
            width: "640px",
            height: "360px",
        },
    },
    medium: {
        name: "medium (md) 768x1024",
        styles: {
            width: "768px",
            height: "1024px",
        },
    },
    large: {
        name: "large (lg) 1024x1366px",
        styles: {
            width: "1024px",
            height: "1366px",
        },
    },
    extraLarge: {
        name: "extraLarge (el) 1280x800px",
        styles: {
            width: "1280px",
            height: "800px",
        },
    },
};

addParameters({
    viewport: {
        viewports,
    },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
