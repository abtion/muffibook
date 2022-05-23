import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Link, { LinkVariant, LinkSize } from "~/components/Link"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/✅ Link",
  component: Link,
} as ComponentMeta<typeof Link>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

const sharedProps = {
  size: LinkSize.Base,
  text: "Link text",
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Info = Template.bind({})
Info.args = {
  ...sharedProps,
  variant: LinkVariant.Info,
}

export const Neutral = Template.bind({})
Neutral.args = {
  ...sharedProps,
  variant: LinkVariant.Neutral,
}

export const NeutralLight = Template.bind({})
NeutralLight.args = {
  ...sharedProps,
  variant: LinkVariant.NeutralLight,
}

export const NeutralDark = Template.bind({})
NeutralDark.args = {
  ...sharedProps,
  variant: LinkVariant.NeutralDark,
}
