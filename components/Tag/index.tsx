import React from "react"
import classNames from "classnames"
import "./index.scss"
import XIcon from "@heroicons/react/solid/XIcon"

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  onClose?: () => void
}

export default function Tag(props: TagProps): JSX.Element {
  const { onClose, text, ...rest } = props

  const usedClassName = classNames("Tag", {
    "Tag--closable": onClose,
  })

  return (
    <div className={usedClassName} {...rest}>
      {text}
      {onClose && (
        <button className="Tag__close" onClick={onClose} aria-label="Close">
          <XIcon />
        </button>
      )}
    </div>
  )
}
