import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Modal, { ModalSize } from "~/components/Modal"
import ModalContent from "~/components/ModalContent"
import ModalTop from "~/components/ModalTop"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/🔎 ModalContent",
  component: ModalContent,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as ComponentMeta<typeof ModalContent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal size={ModalSize.Medium}>
    <ModalTop>Top</ModalTop>
    <ModalContent {...args} />
  </Modal>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: "Content",
}
