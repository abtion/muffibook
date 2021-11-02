import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Duration from "~/components/Duration"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Duration",
  component: Duration,
} as ComponentMeta<typeof Duration>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Duration> = (args) => (
  <Duration {...args} />
)

const startDate = new Date(Date.now() - 600000)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  since: startDate,
}

export const WithFormat = Template.bind({})
WithFormat.args = {
  since: startDate,
  format: "hh:mm:ss",
}

export const WithUpperLimit = Template.bind({})
WithUpperLimit.args = {
  since: new Date(),
  format: "s",
  upperLimitMs: 5000,
}
