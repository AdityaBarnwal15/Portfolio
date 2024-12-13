'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme-provider'

import { Button } from '@/components/ui/button'

export function ModeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
    >
       {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
