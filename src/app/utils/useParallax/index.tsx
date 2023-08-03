import { MutableRefObject, WheelEvent, useEffect, useMemo, useRef } from "react"

interface UseParallaxOptions {
  offsetMultiplier?: number
  anchor?: "top" | "middle" | "bottom"
}

const DEFAULT_OFFSET_MULTIPLIER = 0.25

export default function useParallax<T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  options?: UseParallaxOptions,
) {
  const offset = useRef(0)
  const parrallaxOptions = useMemo(
    () => ({
      offsetMultiplier: 1,
      anchor: "top",
      ...(options ?? {}),
    }),
    [options],
  )

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const windowHeight = window.innerHeight

    const anchorHeight =
      parrallaxOptions?.anchor === "top"
        ? 0
        : parrallaxOptions?.anchor === "middle"
        ? windowHeight / 2
        : windowHeight

    const offsetAmount =
      parrallaxOptions.offsetMultiplier * DEFAULT_OFFSET_MULTIPLIER

    const element = ref.current

    function onScroll(e: Event) {
      if (!element) {
        return
      }

      const refY = element.getBoundingClientRect().y
      const diff = (refY - anchorHeight) * offsetAmount

      element.style.transform = `translateY(${diff}px)`
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // console.log("intersecting")
        if (element) {
          element.style.willChange = `transform`
          window.addEventListener("scroll", onScroll, { passive: true })
        }
      } else {
        // console.log("not intersecting")
        if (element) {
          element.style.willChange = `unset`
        }
        window.removeEventListener("scroll", onScroll)
      }
    })

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        element.style.willChange = `unset`
      }
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [parrallaxOptions?.anchor, parrallaxOptions.offsetMultiplier, ref])

  return offset
}
