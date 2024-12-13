"use client"

import About from '@/components/About'
import ContactSection from '@/components/Contact'
import EducationSection from '@/components/Education'
import { FloatingDock } from '@/components/FloatingDock'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Particle from '@/components/Particle'
import ProjectSection from '@/components/Project'
import Skills from '@/components/Skills'
import { Dock } from '@/components/ui/dock'
import React from 'react'

function page() {
  return (
    <main className='relative w-full overflow-x-hidden '>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Hero/>
        <About/>
        <EducationSection/>
        <ProjectSection/>
        <Skills/>
        <Particle/>
        <ContactSection/>
      </div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-[90%] w-full sm:w-auto sm:max-w-none">
        <FloatingDock/>
      </div>
    </main>
  )
}

export default page