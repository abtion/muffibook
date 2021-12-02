import React from "react"
import renderWithRouteHistory from "~/utils/renderWithRouterHistory"
import userEvent from "@testing-library/user-event"
import Modal, { ModalSize } from "."

describe(Modal, () => {
  const testData = {
    size: ModalSize.Medium,
    children: <div>content</div>,
  }

  describe("size", () => {
    it("sets the size as small", () => {
      const { container } = renderWithRouteHistory(
        <Modal {...testData} size={ModalSize.Small} />
      )

      const modalInner = container.querySelector(".Modal__inner--sm")
      expect(modalInner).toBeInTheDocument()
    })

    it("sets the size as medium", () => {
      const { container } = renderWithRouteHistory(
        <Modal {...testData} size={ModalSize.Medium} />
      )

      const modalInner = container.querySelector(".Modal__inner--md")
      expect(modalInner).toBeInTheDocument()
    })

    it("sets the size as large", () => {
      const { container } = renderWithRouteHistory(
        <Modal {...testData} size={ModalSize.Large} />
      )

      const modalInner = container.querySelector(".Modal__inner--lg")
      expect(modalInner).toBeInTheDocument()
    })
  })

  describe("close button", () => {
    it("renders a link", () => {
      const { container } = renderWithRouteHistory(
        <Modal {...testData} returnUrl="/return/route" />
      )

      const closeButton = container.querySelector(".Modal__close")
      expect(closeButton).toHaveAttribute("href", "/return/route")
    })

    it("renders a callback function", () => {
      const mockCallBack = jest.fn()
      const { container } = renderWithRouteHistory(
        <Modal {...testData} onClose={mockCallBack} />
      )

      const closeButton = container.querySelector(".Modal__close")

      if (closeButton) userEvent.click(closeButton)

      expect(mockCallBack.mock.calls.length).toEqual(1)
    })
  })

  it("renders it's children", () => {
    const { getByText } = renderWithRouteHistory(
      <Modal {...testData}>
        <div>Inner modal content</div>
      </Modal>
    )

    const innerModalContent = getByText("Inner modal content")

    expect(innerModalContent).toBeInTheDocument()
  })
})
