import React from "react"
import classNames from "classnames"
import Variant from "../../const/variant"
import Size from "~/const/size"
import "./index.scss"

export enum InputSize {
  Small = Size.Small,
  Medium = Size.Medium,
  Large = Size.Large,
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize
  variant?: Variant
}

export default function Input(props: InputProps): JSX.Element {
  const { size, variant, className, ...rest } = props

  const usedClassName = classNames(
    "Input",
    {
      [`Input--${size}`]: size,
      [`Input--${variant}`]: variant,
    },
    className
  )

  return <input className={usedClassName} {...rest} />
}
