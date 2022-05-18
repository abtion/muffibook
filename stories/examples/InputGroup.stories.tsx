import React from "react"
import MailIcon from "@heroicons/react/solid/MailIcon"

import Input, { InputVariant } from "~/components/Input"
import Button from "~/components/Button"
import Variant from "~/const/variant"
import Size from "~/const/size"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Examples/InputGroup",
}

export const CombinedInputAndButton = (): JSX.Element => (
  <div className="flex">
    <Input
      variant={InputVariant.Default}
      size={Size.Medium}
      className="rounded-l-md"
      placeholder="Type here"
    />
    <Button
      variant={Variant.Primary}
      size={Size.Medium}
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
      size={Size.Medium}
      className="pl-10"
      placeholder="Type here"
    />
  </div>
)
