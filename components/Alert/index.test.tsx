import React from "react"
import { render } from "@testing-library/react"
import Variants from "../../const/variants"

import Alert, { AlertProps } from "."

const defaultProps: AlertProps = {
  children: "Alert text",
}

describe(Alert, () => {
  it("displays button text", () => {
    const { getByText } = render(<Alert {...defaultProps} />)

    const element = getByText(defaultProps.children as string)

    expect(element).toBeInTheDocument()
  })

  describe("when variant is set", () => {
    it("adds variant class", () => {
      const { getByText } = render(
        <Alert {...defaultProps} variant={Variants.Primary} />
      )

      const element = getByText(defaultProps.children as string)

      expect(element).toHaveClass("Alert--primary")
    })
  })
})
