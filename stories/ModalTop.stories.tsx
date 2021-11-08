import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Modal from "~/components/Modal"
import ModalTop from "~/components/ModalTop"
import Sizes from "~/const/sizes"
import ModalContent from "~/components/ModalContent"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ModalTop",
  component: ModalTop,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as ComponentMeta<typeof ModalTop>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal size={Sizes.Medium}>
    <ModalTop {...args} />
    <ModalContent>Content</ModalContent>
  </Modal>
)

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: "Top",
}
