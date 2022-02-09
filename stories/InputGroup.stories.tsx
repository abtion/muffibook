import React from "react"

import Input, { InputSize, InputVariant } from "~/components/Input"
import Button, { ButtonSize } from "~/components/Button"
import Variant from "~/const/variant"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Examples/InputGroup",
}

export const InputGroup = () => (
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
