import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Modal, { ModalSize } from "~/components/Modal"
import ModalTop from "~/components/ModalTop"
import ModalContent from "~/components/ModalContent"
import { Router } from "react-router"
import { createMemoryHistory } from "history"
import { action } from "@storybook/addon-actions"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/🔎 Modal",
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
    },
    actions: { argTypesRegex: null },
  },
} as ComponentMeta<typeof Modal>

const baseProps = {
  size: ModalSize.Medium,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <ModalTop>Top</ModalTop>
      <ModalContent>Content</ModalContent>
    </Modal>
  )
}

export const WithCloseHandler = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCloseHandler.args = {
  ...baseProps,
  onClose: action("onClose"),
}

export const WithReturnUrl = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithReturnUrl.args = {
  ...baseProps,
  returnUrl: "url",
}
WithReturnUrl.decorators = [
  (Story) => (
    <Router history={createMemoryHistory()}>
      <Story />
    </Router>
  ),
]

export const Unclosable = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unclosable.args = {
  ...baseProps,
}
