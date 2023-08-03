import { MutableRefObject, WheelEvent, useEffect, useMemo, useRef } from "react"

interface UseParallaxOptions {
  offsetMultiplier?: number
  anchor?: "top" | "middle" | "bottom"
}

const DEFAULT_OFFSET_MULTIPLIER = 0.25

// check for prefers reduced motion
// check for existence of intersectionobserver, getBoundingClientRect, and raf
// investigate perf
// investigate cross browser

export default function useParallax<T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  options?: UseParallaxOptions,
) {
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

    let animationFrame: number | null = null

    function calculateParallax() {
      if (!element) {
        return
      }

      if (animationFrame !== null) {
        console.log("another frame")
        window.cancelAnimationFrame(animationFrame)
      }

      animationFrame = window.requestAnimationFrame(() => {
        const refY = element.getBoundingClientRect().y
        const diff = (refY - anchorHeight) * offsetAmount

        element.style.transform = `translateY(${diff}px)`

        animationFrame = null
      })
    }

    function onScroll(e: Event) {
      calculateParallax()
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("intersecting")
        if (element) {
          element.style.willChange = `transform`
          calculateParallax()
          window.addEventListener("scroll", onScroll, { passive: true })
        }
      } else {
        console.log("not intersecting")
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
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [parrallaxOptions?.anchor, parrallaxOptions.offsetMultiplier, ref])

  return null
}
