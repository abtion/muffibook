import React from "react"
import classNames from "classnames"
import Variant from "~/const/variant"
import Sizes from "~/const/sizes"
import "./index.scss"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Sizes
  variant?: Variant
}

export default function Button(props: ButtonProps): JSX.Element {
  const { size, variant, className, ...rest } = props

  const usedClassName = classNames(
    "Button",
    {
      [`Button--${size}`]: size,
      [`Button--${variant}`]: variant,
    },
    className
  )

  return <button className={usedClassName} {...rest} />
}
