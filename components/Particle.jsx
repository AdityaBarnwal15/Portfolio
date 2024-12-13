'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Sparkles, Zap, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useTheme } from 'next-themes'

export default function Particle() {
  const canvasRef = useRef(null)
  const [particles, setParticles] = useState([])
  const [isCreating, setIsCreating] = useState(false)
  const [particleCount, setParticleCount] = useState(100)
  const [connectionDistance, setConnectionDistance] = useState(100)
  const controls = useAnimation()
  const { theme } = useTheme()

  useEffect(() => {
    console.log('Current theme:', theme)
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // Set up mutation observer to detect theme changes
    const observer = new MutationObserver(() => {
      if (canvas && ctx) {
        // Force a redraw when theme changes
        const event = new Event('resize')
        window.dispatchEvent(event)
      }
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Set color based on theme
    //   ctx.strokeStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
    //   ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx
        if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x
          const dy = particle.y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const lineOpacity = 1 - distance / connectionDistance
            const isDarkMode = document.documentElement.classList.contains('dark')
            ctx.strokeStyle = isDarkMode
              ? `rgba(255, 255, 255, ${lineOpacity * 0.5})` 
              : `rgba(0, 0, 0, ${lineOpacity * 0.6})`
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      observer.disconnect()
    }
  }, [particles, connectionDistance]) // Re-run effect when theme changes

  const createParticles = () => {
    const newParticles = []
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`
      })
    }
    setParticles(newParticles)
  }

  const handleCanvasClick = (event) => {
    if (!isCreating) return

    const rect = canvasRef.current?.getBoundingClientRect()
    const x = event.clientX - (rect?.left || 0)
    const y = event.clientY - (rect?.top || 0)

    setParticles(prev => [
      ...prev,
      {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`
      }
    ])
  }

  const toggleCreating = () => {
    setIsCreating(!isCreating)
    controls.start({
      scale: isCreating ? 1 : 1.1,
      transition: { duration: 0.2 }
    })
  }

  return (
    <section className="relative h-screen dark:bg-[#0f0715] overflow-hidden bg-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        onClick={handleCanvasClick}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.h2 
          className=" text-3xl sm:text-5xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Create  Your Particles
        </motion.h2>
        <div className=" flex flex-col gap-2 lg:flex-row lg:space-x-4 pointer-events-auto">
          <Button onClick={createParticles} className="bg-purple-600 hover:bg-purple-700">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Particles
          </Button>
          <motion.div animate={controls}>
            <Button onClick={toggleCreating} className={isCreating ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}>
              <Zap className="mr-2 h-4 w-4" />
              {isCreating ? "Creating" : "Create Particles"}
            </Button>
          </motion.div>
          <Button onClick={() => setParticles([])} className="bg-red-600 hover:bg-red-700">
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear
          </Button>
        </div>
        <div className="mt-8 space-y-4 pointer-events-auto">
          <div className="flex items-center  justify-center">
            <span className="text-white lg:w-40 w-20">Particle Count:</span>
            <Slider
              value={[particleCount]}
              onValueChange={(value) => setParticleCount(value[0])}
              max={500}
              step={10}
              className="lg:w-64 w-40"
            />
            <span className="text-white w-12">{particleCount}</span>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <span className="text-white lg:w-40 w-20">Connection Distance:</span>
            <Slider
              value={[connectionDistance]}
              onValueChange={(value) => setConnectionDistance(value[0])}
              max={200}
              step={10}
              className="lg:w-64 w-40"
            />
            <span className="text-white w-12">{connectionDistance}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
