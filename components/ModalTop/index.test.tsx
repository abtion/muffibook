import React from "react"
import renderWithRouteHistory from "~/utils/renderWithRouterHistory"
import ModalTop from "."

describe(ModalTop, () => {
  it("renders it's children", () => {
    const { getByText } = renderWithRouteHistory(
      <ModalTop>Some content</ModalTop>
    )

    const content = getByText("Some content")

    expect(content).toBeInTheDocument()
  })
})
