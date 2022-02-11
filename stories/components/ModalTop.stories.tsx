import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Modal, { ModalSize } from "~/components/Modal"
import ModalTop from "~/components/ModalTop"
import ModalContent from "~/components/ModalContent"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/🔎 ModalTop",
  component: ModalTop,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as ComponentMeta<typeof ModalTop>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal size={ModalSize.Medium}>
    <ModalTop {...args} />
    <ModalContent>Content</ModalContent>
  </Modal>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: "Top",
}
