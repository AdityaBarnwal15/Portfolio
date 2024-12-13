'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Book, ThumbsUp, GraduationCap, MapPin, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import TweetCard from '@/components/TweetCard'
import { FaGithub } from "react-icons/fa";


export default function About() {
  const personalInfo = [
    { icon: GraduationCap, text: 'BTech CSE 3rd Year', color: 'text-blue-400' },
    { icon: Briefcase, text: 'Aspiring Frontend Developer', color: 'text-green-400' },
    { icon: MapPin, text: 'NSHM Knowledge Campus, Durgapur', color: 'text-red-400' },
  ]
  const [likes, setLikes] = useState(7)

  const stats = [
    { 
      content: (
        <Button
          variant="outline"
          size="lg"
          onClick={() => setLikes(prev => prev + 1)}
          className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black w-full"
        >
          <ThumbsUp className="mr-2 h-4 w-4" /> {likes} Likes
        </Button>
      ),
      label: "Like\nPortfolio",
    },
    { number: '3+', label: 'Projects\nCompleted', icon: Book },
  ]
  

  return (
    <section className="min-h-screen bg-gradient-to-br bg-white dark:bg-[#0f0715] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center text-yellow-400 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#170525] dark:text-yellow-400">About Me</span>
          
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div 
            className="space-y-6 sm:space-y-8 bg-[#170525] border border-white  backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-lg shadow-gray-400/10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 ">
              <Image
                src="/profile.png"
                alt="Anurag Singh"
                width={100}
                height={100}
                className="rounded-full border-2 border-yellow-400"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white relative mb-2 whitespace-nowrap">
                  <span className="relative z-10">Anurag Singh</span>
                  
                </h3>
                <div className="space-y-1">
                  {personalInfo.map((info, index) => (
                    <motion.div
                      key={info.text}
                      className="flex items-center gap-2 "
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <info.icon className={`w-4 h-4 ${info.color}`} />
                      <span className="text-sm text-gray-400">{info.text}</span>
                    </motion.div>
                  ))}
                </div>
               
              </div>
            </div>
            <div className=" hidden lg:grid lg:grid-cols-2 gap-4 lg:gap-6 mt-2">
            {stats.map((stat, index) => (
              <motion.div
                key={typeof stat.label === 'string' ? stat.label : index}
                className="bg-[#170525] border border-white backdrop-blur-lg rounded-3xl p-6 mt-7 flex flex-col items-center justify-center text-center w-[15vw] h-[16vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05}}
              >
                {'icon' in stat && <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-3 sm:mb-4" />}
                {'number' in stat && (
                  <span className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 relative">
                    <span className="relative z-10">{stat.number}</span>
                    <span className="absolute inset-0 blur-sm text-yellow-600 z-0" aria-hidden="true">{stat.number}</span>
                  </span>
                )}
                {'content' in stat && stat.content}
                <span className="text-base sm:text-lg text-gray-300 whitespace-pre-line mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </div>
          </motion.div>
          

          
              <motion.div
                className="bg-[#170525] border border-white backdrop-blur-lg rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg shadow-yellow-400/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
              >
                 <TweetCard  className="w-full h-full" id="1840280450687738127" />
              </motion.div>
            
          
        </div>

        <motion.div
          className="mt-8 sm:mt-12 bg-[#170525] border border-white backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-lg shadow-gray-400/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed relative max-h-48 sm:max-h-60 overflow-y-auto">
            <span className="relative z-10">
              A passionate Computer Science student with a fresh perspective and a hunger for learning. Currently pursuing my BTech in Computer Science and Engineering at NSHM Knowledge Campus Durgapur, I'm excited to bring my theoretical knowledge and practical projects to life in the professional world. My expertise lies in leveraging modern technologies such as ReactJS, NextJS, and various UI frameworks including Material UI, Tailwind CSS, and Bootstrap. I take pride in my ability to design intuitive user interfaces and components that create responsive, aesthetically pleasing websites. My skill set extends to API integration, ensuring smooth data flow between front-end and back-end systems. Known for writing clean, well-structured code, I'm committed to creating maintainable and scalable solutions. Through my academic projects and internships, I've contributed to exciting initiatives that have honed my skills in web development. I'm eager to apply my knowledge, learn from experienced professionals, and contribute to pushing the boundaries of web development to deliver exceptional digital experiences.
            </span>
            <span className="absolute inset-0 blur-sm text-gray-600 z-0" aria-hidden="true">
              A passionate Computer Science student with a fresh perspective and a hunger for learning. Currently pursuing my BTech in Computer Science and Engineering at NSHM Knowledge Campus Durgapur, I'm excited to bring my theoretical knowledge and practical projects to life in the professional world. My expertise lies in leveraging modern technologies such as ReactJS, NextJS, and various UI frameworks including Material UI, Tailwind CSS, and Bootstrap. I take pride in my ability to design intuitive user interfaces and components that create responsive, aesthetically pleasing websites. My skill set extends to API integration, ensuring smooth data flow between front-end and back-end systems. Known for writing clean, well-structured code, I'm committed to creating maintainable and scalable solutions. Through my academic projects and internships, I've contributed to exciting initiatives that have honed my skills in web development. I'm eager to apply my knowledge, learn from experienced professionals, and contribute to pushing the boundaries of web development to deliver exceptional digital experiences.
            </span>
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 sm:mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
          onClick={() => window.open('https://github.com/itsAnuragsingh', '_blank')}
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-[#170525] text-[#170525] hover:bg-[#170525] hover:text-white border-2 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-semibold  transition-colors shadow-lg dark:shadow-yellow-400/20"
          >
            <FaGithub className="mr-2 h-5 w-5" />
            Github
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

