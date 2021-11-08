import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Modal from "~/components/Modal"
import ModalTop from "~/components/ModalTop"
import ModalContent from "~/components/ModalContent"
import Sizes from "~/const/sizes"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as ComponentMeta<typeof Modal>

const baseProps = {
  size: Sizes.Medium,
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

export const WithoutCloseButton = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutCloseButton.args = {
  ...baseProps,
}

export const WithCloseButton = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCloseButton.args = {
  ...baseProps,
  onClose: () => alert("Clicked"),
}
