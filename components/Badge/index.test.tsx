import React from "react"
import { render } from "@testing-library/react"
import Variant from "~/const/variant"

import Badge, { BadgeProps, BadgeSize } from "."

const defaultProps: BadgeProps = {
  variant: Variant.Success,
  size: BadgeSize.Small,
  text: "Badge text",
}

describe(Badge, () => {
  it("displays badge text", () => {
    const { getByText } = render(<Badge {...defaultProps} />)

    const badge = getByText("Badge text")

    expect(badge).toBeInTheDocument()
  })

  describe("when size is set", () => {
    it("adds size class", () => {
      const { getByText } = render(
        <Badge {...defaultProps} size={BadgeSize.Small} />
      )

      const bagde = getByText(defaultProps.text as string)

      expect(bagde).toHaveClass("Badge--sm")
    })
  })

  describe("when variant is set", () => {
    it("adds variant class", () => {
      const { getByText } = render(
        <Badge {...defaultProps} variant={Variant.Primary} />
      )

      const bagde = getByText(defaultProps.text as string)

      expect(bagde).toHaveClass("Badge--primary")
    })
  })
})
