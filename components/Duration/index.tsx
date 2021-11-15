import React from "react"
import { useState } from "react"
import { Duration as LuxonDuration } from "luxon"
import useInterval from "~/hooks/useInterval"

const oneSecondMs = 1000
const oneMinuteMs = 60 * oneSecondMs

const getDuration = (since: Date) => Date.now() - since.getTime()

export interface DurationProps {
  since: Date
  format?: string
  upperLimitMs?: number
}

export default function Duration({
  since,
  format = "hh:mm",
  upperLimitMs,
}: DurationProps): JSX.Element {
  const [duration, setDuration] = useState(getDuration(since))
  const refreshRate = format.includes("s") ? oneSecondMs : oneMinuteMs

  useInterval(
    () => {
      setDuration(getDuration(since))
    },
    refreshRate,
    [since]
  )

  if (upperLimitMs && duration > upperLimitMs) {
    return <>{LuxonDuration.fromMillis(upperLimitMs).toFormat(`> ${format}`)}</>
  }

  if (duration < 0) return <>00:00</>

  return <>{LuxonDuration.fromMillis(duration).toFormat(format)}</>
}
