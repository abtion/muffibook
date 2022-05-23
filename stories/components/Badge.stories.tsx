import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Badge, { BadgeSize } from "~/components/Badge"
import Variant from "~/const/variant"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/✅ Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

const sharedProps = {
  size: BadgeSize.Large,
  text: "Badge text",
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Info = Template.bind({})
Info.args = {
  ...sharedProps,
  variant: Variant.Info,
}

export const Success = Template.bind({})
Success.args = {
  ...sharedProps,
  variant: Variant.Success,
}

export const Warning = Template.bind({})
Warning.args = {
  ...sharedProps,
  variant: Variant.Warning,
}

export const Danger = Template.bind({})
Danger.args = {
  ...sharedProps,
  variant: Variant.Danger,
}

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
