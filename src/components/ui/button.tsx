import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Map of variant classes
    const variants = {
      default: "bg-gradient-to-b from-white to-zinc-200 text-zinc-950 hover:from-zinc-100 hover:to-zinc-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] border border-zinc-100 font-semibold",
      secondary: "bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700 text-zinc-100 hover:from-zinc-700 hover:to-zinc-800 hover:border-zinc-600 shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.7)]",
      outline: "border border-zinc-800 bg-transparent text-zinc-400 hover:bg-zinc-800/50 hover:border-zinc-700 hover:text-zinc-100 shadow-[0_4px_14px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)]",
      ghost: "hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-100",
    }
    
    // Map of size classes
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
