import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Input from "~/components/Input"
import Variant from "~/const/variant"
import Sizes from "~/const/sizes"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

const baseProps = {
  variant: Variant.Neutral,
  size: Sizes.Medium,
  placeholder: "Placeholder text",
  value: "",
  disabled: false,
}

export const Neutral = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Neutral.args = {
  ...baseProps,
}

export const Danger = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  ...baseProps,
  variant: Variant.Danger,
}

export const Large = Template.bind({})
Large.args = {
  ...baseProps,
  size: Sizes.Large,
}
