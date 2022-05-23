import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Tag from "~/components/Tag"
import { action } from "@storybook/addon-actions"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/✅ Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

const sharedProps = {
  text: "Tag text",
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const WithCloseHandler = Template.bind({})
WithCloseHandler.args = {
  ...sharedProps,
  onClose: action("onClose"),
}

export const WithoutCloseHandler = Template.bind({})
WithoutCloseHandler.args = {
  ...sharedProps,
}
WithoutCloseHandler.parameters = {
  actions: { argTypesRegex: null },
}
