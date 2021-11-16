import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Alert from "~/components/Alert"
import Variants from "~/const/variants"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Info = Template.bind({})
Info.args = {
  variant: Variants.Info,
  children: "Alert text",
}

export const Success = Template.bind({})
Success.args = {
  variant: Variants.Success,
  children: "Alert text",
}

export const Warning = Template.bind({})
Warning.args = {
  variant: Variants.Warning,
  children: "Alert text",
}

export const Danger = Template.bind({})
Danger.args = {
  variant: Variants.Danger,
  children: "Alert text",
}

export const Primary = Template.bind({})
Primary.args = {
  variant: Variants.Primary,
  children: "Alert text",
}

export const Neutral = Template.bind({})
Neutral.args = {
  variant: Variants.Neutral,
  children: "Alert text",
}
