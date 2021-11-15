import React from "react"
import "./index.scss"

interface ModalContentProps {
  children: React.ReactNode
}

export default function ModalContent({
  children,
}: ModalContentProps): JSX.Element {
  return <div className="ModalContent">{children}</div>
}
