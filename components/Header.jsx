'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-provider'
import { Sun, Moon, Menu, X } from 'lucide-react'
import WordRotate from './ui/word-rotate'
import HyperText from './ui/hyper-text'



export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className=" absolute w-full z-10 sm:left-[4vw] sm:top-[4vh] left-[5vw] top-[1vh] ">
      
        {/* <WordRotate className="text-3xl font-bold text-blue-950 dark:text-yellow-400" words={['<Anurag />']} /> */}
        <HyperText className="text-xl sm:text-3xl font-bold text-blue-950 dark:text-yellow-400" text="<Anurag/>" />
        
    </header>
  )
}

