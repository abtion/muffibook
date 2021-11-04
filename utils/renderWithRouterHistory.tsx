import React from "react"
import { render as tlRender } from "@testing-library/react"
import { Router } from "react-router"
import { createMemoryHistory, MemoryHistory } from "history"

export interface RenderResult extends ReturnType<typeof tlRender> {
  history: MemoryHistory
}

export default function renderWithRouteHistory(
  component: JSX.Element,
  paths?: string[]
): RenderResult {
  const history = createMemoryHistory({
    initialEntries: [`/`, ...(paths || [""])],
  })

  const context = tlRender(<Router history={history}>{component}</Router>)

  return { history, ...context }
}
