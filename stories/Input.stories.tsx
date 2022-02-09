import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Input, { InputSize, InputVariant } from "~/components/Input"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/🚧 Input",
  component: Input,
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

const baseProps = {
  variant: InputVariant.Default,
  size: InputSize.Medium,
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
  variant: InputVariant.Error,
}

export const Large = Template.bind({})
Large.args = {
  ...baseProps,
  size: InputSize.Large,
}
