'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FaReact, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiGraphql } from 'react-icons/si'
import WordRotate from './ui/word-rotate'


const skills = [
  { name: 'ReactJS', icon: FaReact, className: 'right-[100%] top-[25%] ', color: 'text-blue-400' },
  { name: 'NextJS', icon: SiNextdotjs, className: 'left-1/8 top-0', color: "text-black" },
  { name: 'Tailwind CSS', icon: SiTailwindcss, className: 'right-[-18%] top-[10%]', color: 'text-cyan-400' },
  { name: 'JavaScript', icon: SiJavascript, className: 'right-[-40%] top-[40%]', color: 'text-yellow-400' },
  { name: 'GraphQL', icon: SiGraphql, className: 'right-[80%] bottom-1/4', color: 'text-pink-600' },
  { name: 'Figma', icon: FaFigma, className: 'right-[0%] bottom-[10%]', color: 'text-purple-400' },
]

export default function Hero() {
  return (

    <div className=" min-h-screen  dark:bg-[#0f0715] bg-white text-white relative overflow-hidden px-4 py-12">
      {/* Navigation */}
     
    

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center gap-12 pt-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span>👋</span>
              <span className='dark:text-white text-gray-800'>Hello! I'm</span>
            </div>
            <span className="dark:text-yellow-400 text-blue-950 ">Anurag Singh</span>
          </h1>
          
          <div className="mb-8">
            <div>
              <p className='text-gray-800 font-bold dark:text-white'>An aspiring</p>
            <WordRotate  
            className="text-2xl font-bold text-blue-950 dark:text-white" 
            words={['ReactJS Developer', 'NextJS Developer', 'NodeJS Developer']} />
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className='text-black text-bold dark:text-white'> with</span>
              <span className="px-3 py-1 rounded-full dark:bg-yellow-400/10 dark:text-yellow-400 text-white bg-blue-950">
                Fresher
              </span>
              <span className='text-black text-bold dark:text-white'>Experience</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Anurag_Singh_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="
                border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white border-2 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black"
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
            <Button
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
              size="lg"
              className=" bg-blue-950 text-white hover:bg-blue-800 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500"
            >
              Hire Me
            </Button>
          </div>
        </motion.div>

        {/* Image and Floating Skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 blur-2xl opacity-30" />
            <Image
              src="/profile.png"
              alt="Anurag Singh"
              width={400}
              height={400}
              className="relative z-2 rounded-full object-cover"
            />
            
            {/* Floating Skill Badges */}
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`absolute ${skill.className} transform -translate-x-1/2 -translate-y-1/2`}
              >
                <div className="flex items-center gap-2 dark:bg-white/90 bg-gray-950/90 px-3 py-1.5 rounded-full hover:scale-105 transition-all">
                  <skill.icon className={`text-[20px] ${skill.color} `} />
                  <span className="text-[15px] font-medium text-white dark:text-black">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

