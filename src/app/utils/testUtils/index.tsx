export async function resolvedComponent<T>(
  Component: (props: T) => Promise<JSX.Element>,
  props: T,
) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}
