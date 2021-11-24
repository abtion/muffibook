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

const sharedProps = {
  children: "Button text",
  size: Sizes.Medium,
  disabled: false,
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
  ...sharedProps,
  variant: Variants.Primary,
}

export const Neutral = Template.bind({})
Neutral.args = {
  ...sharedProps,
  variant: Variants.Neutral,
}

export const Success = Template.bind({})
Success.args = {
  ...sharedProps,
  variant: Variants.Success,
}

export const Danger = Template.bind({})
Danger.args = {
  ...sharedProps,
  variant: Variants.Danger,
}

export const Warning = Template.bind({})
Warning.args = {
  ...sharedProps,
  variant: Variants.Warning,
}

export const Info = Template.bind({})
Info.args = {
  ...sharedProps,
  variant: Variants.Info,
}
