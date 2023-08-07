"use client"

import { MouseEvent, ReactNode } from "react"

interface ScrollLinkProps {
  href: string
  className?: string
  children: ReactNode
}

const onClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
  const el = document.getElementById(href.slice(1))

  if (el && el.scrollIntoView) {
    e.preventDefault()
    el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
  }
}

export default function ScrollLink({
  href,
  children,
  className,
}: ScrollLinkProps) {
  return (
    <a className={className} href={href} onClick={(e) => onClick(e, href)}>
      {children}
    </a>
  )
}
