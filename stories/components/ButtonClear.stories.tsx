import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import ButtonClear from "~/components/ButtonClear"
import Variant from "~/const/variant"
import Size from "~/const/size"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/✅ ButtonClear",
  component: ButtonClear,
} as ComponentMeta<typeof ButtonClear>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonClear> = (args) => (
  <ButtonClear {...args} />
)

const sharedProps = {
  children: "Button text",
  size: Size.Medium,
  disabled: false,
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
  ...sharedProps,
  variant: Variant.Primary,
}

export const Neutral = Template.bind({})
Neutral.args = {
  ...sharedProps,
  variant: Variant.Neutral,
}

export const Success = Template.bind({})
Success.args = {
  ...sharedProps,
  variant: Variant.Success,
}

export const Danger = Template.bind({})
Danger.args = {
  ...sharedProps,
  variant: Variant.Danger,
}

export const Warning = Template.bind({})
Warning.args = {
  ...sharedProps,
  variant: Variant.Warning,
}

export const Info = Template.bind({})
Info.args = {
  ...sharedProps,
  variant: Variant.Info,
}
