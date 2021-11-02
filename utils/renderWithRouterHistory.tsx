import React from "react"
import { render as tlRender } from "@testing-library/react"
import { Router } from "react-router"
import { createMemoryHistory, parsePath } from "history"

export default function renderWithRouteHistory(
  component: JSX.Element,
  paths?: string[]
) {
  const history = createMemoryHistory({
    initialEntries: [`/`, ...(paths || [""])],
  })

  const context = tlRender(<Router history={history}>{component}</Router>)

  return { history, ...context }
}
