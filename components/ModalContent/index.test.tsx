import React from "react"
import renderWithRouteHistory from "~/utils/renderWithRouterHistory"
import ModalContent from "."

describe(ModalContent, () => {
  it("renders it's children", () => {
    const { getByText } = renderWithRouteHistory(
      <ModalContent>Some content</ModalContent>
    )

    const content = getByText("Some content")

    expect(content).toBeInTheDocument()
  })
})
