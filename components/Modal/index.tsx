import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import "./index.scss"
import Sizes from "~/const/sizes"

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
    const icon = <div className="Modal__inner-top-close">&#xff38;</div>

    if (returnUrl) return <Link to={returnUrl}>{icon}</Link>
    if (onClose) return <div onClick={onClose}>{icon}</div>
    return null
  }

  return (
    <div className="Modal">
      <div className="Modal__outer"></div>
      <div className={innerModal}>
        <div className="">
          {renderCloseButton()}
          {children}
        </div>
      </div>
    </div>
  )
}

type BaseProps = {
  size: Sizes
  children: React.ReactNode
}

interface ModalPropsWithoutReturnUrlOrCloseHandler extends BaseProps {
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
  | ModalPropsWithoutReturnUrlOrCloseHandler
  | ModalPropsWithReturnUrl
  | ModalPropsWithCloseHandler
