'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Info, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FaReact, FaBootstrap, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs,SiGooglegemini, SiJavascript, SiGraphql, SiApollographql, SiGit, SiDiscord, SiNodedotjs, SiExpress, SiAxios, SiSharp, SiVercel, SiTailwindcss } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const projects = [
  {
    name: 'SmartTask',
    image: '/smart.png',
    color: 'from-blue-950 to-[#070B34]',
    workedOn: ['Website', 'Admin Panel'],
    technologies: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'ReactJS', icon: FaReact, color: '#61DAFB' },
      { name: 'Gemini', icon: SiGooglegemini, color: '#312E81' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Axios', icon: SiAxios, color: '#CB3837' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    ],
    link: 'https://github.com/itsAnuragsingh/SmartTask?tab=readme-ov-file',
    description: 'SmartTask is a smart task management app that helps you organize your to-dos. It includes AI-powered task generation using Google Generative AI, allowing you to quickly create a to-do list based on your prompt. The app also features light/dark theme toggling, adding, completing, and removing tasks with a simple and clean user interface.'
  },
  {
    name: 'TaskSync',
    image: '/tasksync.png',
    color: 'from-purple-950 to-[#1A0227]',
    workedOn: ['Discord Bot', 'Tool'],
    technologies: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'NodeJS', icon: SiNodedotjs, color: '#71c450' }, 
      {name: 'DiscordJS', icon: SiDiscord, color: '#5865F2'},
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'ExpressJS', icon: SiExpress, color: '#000' },
      { name: 'Axios', icon: SiAxios, color: '#CB3837' },
    ],
    link: 'https://github.com/itsAnuragsingh/TaskSync',
    description: 'TaskSync is a powerful Discord bot designed to supercharge productivity by managing tasks, setting reminders, and facilitating the Pomodoro technique. It also includes webhook integration for expanded functionality and team collaboration.'
  },
  {
    name: 'MorphPic',
    image: '/morphic.png',
    color: 'from-rose-950 to-[#2D0A1A]',
    workedOn: ['Website'],
    technologies: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'ReactJS', icon: FaReact, color: '#61DAFB' },
      { name: 'NodeJS', icon: SiNodedotjs, color: '#71c450' }, 
      { name: 'ExpressJS', icon: SiExpress, color: '#000' },
      { name: 'Axios', icon: SiAxios, color: '#CB3837' },
      { name: 'Sharp', icon: SiSharp, color: '#99cc00' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Vercel', icon: SiVercel, color: '#000' },
    ],
    link: 'https://github.com/itsAnuragsingh/MorphPic',
    description: 'MorphPic is a cutting-edge web application that allows users to effortlessly convert images between various formats. With a sleek, user-friendly interface and powerful backend processing, MorphPic makes image conversion a breeze.'
  }
]

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="bg-white dark:bg-[#0f0715] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className={`rounded-2xl bg-gradient-to-br ${project.color} overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6">
                {/* Project Images */}
                <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-black/20 mb-6 shadow-inner">
                  <Image
                    src={project.image}
                    alt={project.name}
                    objectFit='cover'
                    width={800}
                    height={800}
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Info className="w-5 h-5 text-white" />
                      <span className="sr-only">Project Info</span>
                    </Button>
                  </div>

                  {/* Worked On */}
                  <div>
                    <h4 className="text-xs text-gray-400 mb-2">Worked on</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.workedOn.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-white/10 text-xs text-white transition-colors duration-200 hover:bg-white/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs text-gray-400 mb-2">Technologies I have used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.div
                        key={tech.name}
                        className="flex items-center gap-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-2.5 py-1.5 rounded-full hover:scale-105 transition-all "
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        // transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <tech.icon className="text-xl" style={{ color: tech.color }} />
                        <span className="text-xs font-medium">{tech.name}</span>
                      </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Link Button */}
                  
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-white/20 hover:bg-white/10 text-white text-sm transition-all duration-200 hover:scale-105"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <span>Go to {project.name}</span>
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                  
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Info Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`bg-gradient-to-br ${selectedProject.color} p-6 rounded-2xl max-w-md w-full shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5 text-white" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <p className="text-white mb-4">{selectedProject.description}</p>
              <Button
                variant="outline"
                className="w-full rounded-full border-white/20 hover:bg-white/10 text-white"
                onClick={() => window.open(selectedProject.link, '_blank')}
              >
                <span>Visit {selectedProject.name}</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

