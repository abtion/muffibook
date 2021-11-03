import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Button from "~/components/Button"
import Variants from "~/const/variants"
import Sizes from "~/const/sizes"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: Variants.Primary,
  children: "Button text",
  size: Sizes.Medium,
}

export const Neutral = Template.bind({})
Neutral.args = {
  variant: Variants.Neutral,
  children: "Button text",
  size: Sizes.Medium,
}

export const Large = Template.bind({})
Large.args = {
  variant: Variants.Primary,
  size: Sizes.Large,
  children: "Button text",
}

export const Small = Template.bind({})
Small.args = {
  variant: Variants.Primary,
  size: Sizes.Small,
  children: "Button text",
}
