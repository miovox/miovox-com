'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
] as const

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center bg-background border border-border rounded-lg p-1 h-10 w-44 animate-pulse" />
    )
  }

  return (
    <div
      className="flex items-center bg-background border border-border rounded-lg p-1"
      role="group"
      aria-label="Theme selection"
    >
      {themes.map(({ value, label, icon: Icon }) => {
        const isActive = theme === value
        
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`
              flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
              transition-all duration-200 ease-out min-w-[52px]
              focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none
              hover:scale-[1.02] active:scale-[0.98]
              motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100
              ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }
            `}
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch to ${label.toLowerCase()} theme`}
            tabIndex={isActive ? 0 : -1}
          >
            <Icon 
              className="h-4 w-4" 
              strokeWidth={1.5}
              aria-hidden="true" 
            />
            <span className="hidden sm:inline">{label}</span>
          </button>
        )
      })}
    </div>
  )
}

// Alternative compact version for mobile/small spaces
export function ThemeToggleCompact() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-10 bg-background border border-border rounded-lg animate-pulse" />
    )
  }

  const currentTheme = themes.find(t => t.value === theme) || themes[0]
  const nextTheme = themes[(themes.findIndex(t => t.value === theme) + 1) % themes.length]
  const Icon = currentTheme.icon

  return (
    <button
      onClick={() => setTheme(nextTheme.value)}
      className={`
        flex items-center justify-center p-2 rounded-lg border border-border
        bg-background hover:bg-accent hover:text-accent-foreground
        transition-all duration-200 ease-out
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none
        hover:scale-[1.02] active:scale-[0.98]
        motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100
      `}
      aria-label={`Switch to ${nextTheme.label.toLowerCase()} theme`}
      title={`Current: ${currentTheme.label} - Click for ${nextTheme.label}`}
    >
      <Icon 
        className="h-4 w-4" 
        strokeWidth={1.5}
        aria-hidden="true" 
      />
    </button>
  )
}