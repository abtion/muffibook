import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import "./index.scss"

export enum ModalSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

interface BaseProps {
  size: ModalSize
  children: React.ReactNode
}

interface ModalPropsWithoutCloseButton extends BaseProps {
  onClose?: undefined
  returnUrl?: undefined
}

interface ModalPropsWithReturnUrl extends BaseProps {
  returnUrl: string
  onClose?: undefined
}

interface ModalPropsWithCloseHandler extends BaseProps {
  returnUrl?: undefined
  onClose: () => void
}

type ModalProps =
  | ModalPropsWithoutCloseButton
  | ModalPropsWithReturnUrl
  | ModalPropsWithCloseHandler

export default function Modal({
  returnUrl,
  onClose,
  size,
  children,
}: ModalProps): JSX.Element {
  const innerModal = classNames("Modal__inner", {
    [`Modal__inner--${size}`]: size,
  })

  const renderCloseButton = () => {
    if (returnUrl)
      return (
        <Link className="Modal__close" to={returnUrl}>
          &times;
        </Link>
      )
    if (onClose)
      return (
        <div className="Modal__close" onClick={onClose}>
          &times;
        </div>
      )
    return null
  }

  return (
    <div className="Modal">
      <div className="Modal__outer"></div>
      <div className={innerModal}>
        {renderCloseButton()}
        {children}
      </div>
    </div>
  )
}
