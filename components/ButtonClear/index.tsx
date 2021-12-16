import React from "react"
import classNames from "classnames"
import Variant from "~/const/variant"
import "./index.scss"

export enum ButtonClearSize {
  ExtraSmall = "xs",
  Small = "sm",
  Medium = "md",
  Large = "lg",
  ExtraLarge = "xl",
}

export interface ButtonClearProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonClearSize
  variant?: Variant
}

export default function ButtonClear(props: ButtonClearProps): JSX.Element {
  const { size, variant, className, ...rest } = props

  const usedClassName = classNames(
    "ButtonClear",
    {
      [`ButtonClear--${size}`]: size,
      [`ButtonClear--${variant}`]: variant,
    },
    className
  )

  return <button className={usedClassName} {...rest} />
}
