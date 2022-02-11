import React from "react"
import MailIcon from "@heroicons/react/solid/MailIcon"

import Input, { InputSize, InputVariant } from "~/components/Input"
import Button, { ButtonSize } from "~/components/Button"
import Variant from "~/const/variant"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Examples/InputGroup",
}

export const CombinedInputAndButton = (): JSX.Element => (
  <div className="flex">
    <Input
      variant={InputVariant.Default}
      size={InputSize.Medium}
      className="rounded-l-md"
      placeholder="Type here"
    />
    <Button
      variant={Variant.Primary}
      size={ButtonSize.Medium}
      className="rounded-r-md -ml-px"
    >
      Submit
    </Button>
  </div>
)

export const InputWithIcon = (): JSX.Element => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <MailIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
    </div>
    <Input
      variant={InputVariant.Default}
      size={InputSize.Medium}
      className="pl-10"
      placeholder="Type here"
    />
  </div>
)
