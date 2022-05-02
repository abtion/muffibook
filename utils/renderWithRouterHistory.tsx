import React from "react"
import { render as tlRender } from "@testing-library/react"
import { Router } from "react-router"
import { Routes, Route } from "react-router-dom"
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

  const context = tlRender(
    <Router navigator={history} location={history.location}>
      <Routes>
        <Route path="/*" element={component} />
      </Routes>
    </Router>
  )

  return { history, ...context }
}
