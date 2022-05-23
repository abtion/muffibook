import React from "react"
import classNames from "classnames"
import Variant from "~/const/variant"
import "./index.scss"

export enum BadgeSize {
  Small = "sm",
  Large = "lg",
}
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size: BadgeSize
  variant: Variant
  text: string
}

export default function Badge(props: BadgeProps): JSX.Element {
  const { size, variant, text, ...rest } = props

  const usedClassName = classNames("Badge", {
    [`Badge--${size}`]: size,
    [`Badge--${variant}`]: variant,
  })

  return (
    <div className={usedClassName} {...rest}>
      {text}
    </div>
  )
}
