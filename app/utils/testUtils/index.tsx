import { waitFor } from "@testing-library/react"

export async function resolvedComponent<T>(
  Component: (props: T) => Promise<JSX.Element>,
  props: T,
) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}

export function waitForX(x: number) {
  return waitFor(() => new Promise((resolve) => setTimeout(resolve, x)), {
    timeout: x * 2,
  })
}
