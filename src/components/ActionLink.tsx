import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"

type ActionLinkProps = {
  readonly children: ReactNode
  readonly className?: string
  readonly href: string
  readonly label?: string
  readonly variant?: "default" | "outline" | "secondary" | "ghost" | "link"
}

export function ActionLink({
  children,
  className,
  href,
  label,
  variant = "default",
}: ActionLinkProps) {
  return (
    <Button
      className={className}
      nativeButton={false}
      render={<a aria-label={label} href={href} />}
      size="lg"
      variant={variant}
    >
      {children}
    </Button>
  )
}
