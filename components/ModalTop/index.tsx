import React from "react"
import "./index.scss"

interface ModalTopProps {
  children: React.ReactNode
}

export default function ModalTop({ children }: ModalTopProps): JSX.Element {
  return (
    <div className="ModalTop">
      <div className="ModalTop__content">{children}</div>
    </div>
  )
}
