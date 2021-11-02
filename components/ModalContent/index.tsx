import React from "react"
import "./style.scss"

export default function ModalContent({ children }: ModalContentProps) {
  return <div className="ModalContent">{children}</div>
}

type ModalContentProps = {
  children: React.ReactNode
}
