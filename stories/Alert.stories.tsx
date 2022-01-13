import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import InformationCircleIcon from "@heroicons/react/solid/InformationCircleIcon"
import CheckCircleIcon from "@heroicons/react/solid/CheckCircleIcon"
import ExclamationIcon from "@heroicons/react/solid/ExclamationIcon"
import XCircleIcon from "@heroicons/react/solid/XCircleIcon"

import Alert from "~/components/Alert"
import AlertIcon from "~/components/AlertIcon"
import Variant from "~/const/variant"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/✅ Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Info = Template.bind({})
Info.args = {
  variant: Variant.Info,
  className: "flex",
  children: [
    <AlertIcon icon={InformationCircleIcon} variant={Variant.Info} key="" />,
    "Alert text",
  ],
}

export const Success = Template.bind({})
Success.args = {
  variant: Variant.Success,
  className: "flex",
  children: [
    <AlertIcon icon={CheckCircleIcon} variant={Variant.Success} key="" />,
    "Alert text",
  ],
}

export const Warning = Template.bind({})
Warning.args = {
  variant: Variant.Warning,
  className: "flex",
  children: [
    <AlertIcon icon={ExclamationIcon} variant={Variant.Warning} key="" />,
    "Alert text",
  ],
}

export const Danger = Template.bind({})
Danger.args = {
  variant: Variant.Danger,
  className: "flex",
  children: [
    <AlertIcon icon={XCircleIcon} variant={Variant.Danger} key="" />,
    "Alert text",
  ],
}

export const Primary = Template.bind({})
Primary.args = {
  variant: Variant.Primary,
  children: "Alert text",
}

export const Neutral = Template.bind({})
Neutral.args = {
  variant: Variant.Neutral,
  children: "Alert text",
}

export const WithoutCloseHandler = Template.bind({})
WithoutCloseHandler.args = {
  variant: Variant.Warning,
  children: "Alert text",
}
WithoutCloseHandler.parameters = {
  actions: { argTypesRegex: null },
}
