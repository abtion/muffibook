import React from "react"
import classNames from "classnames"
import "./index.scss"

export enum LinkSize {
  ExtraSmall = "xs",
  Small = "sm",
  Base = "bs",
}

export enum LinkVariant {
  Neutral = "neutral",
  NeutralLight = "neutral-light",
  NeutralDark = "neutral-dark",
  Info = "info",
}

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  variant: LinkVariant
  text: string
  size: LinkSize
  underline?: boolean
}

export default function Link(props: LinkProps): JSX.Element {
  const { underline, size, variant, className, text, ...rest } = props

  const usedClassName = classNames(
    "Link",
    {
      [`Link--${variant}`]: variant,
      [`Link--${size}`]: size,
      [`Link--underline`]: underline,
    },
    className
  )

  return (
    <a className={usedClassName} {...rest}>
      {text}
    </a>
  )
}
