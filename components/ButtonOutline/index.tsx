import React from "react"
import classNames from "classnames"
import Variant from "~/const/variant"
import Size from "~/const/size"
import "./index.scss"

export interface ButtonOutlineProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
  variant?: Variant | "basic" | "secondary"
}

export default function ButtonOutline(props: ButtonOutlineProps): JSX.Element {
  const { size, variant, className, ...rest } = props

  const usedClassName = classNames(
    "ButtonOutline",
    {
      [`ButtonOutline--${size}`]: size,
      [`ButtonOutline--${variant}`]: variant,
    },
    className
  )

  return <button className={usedClassName} {...rest} />
}
