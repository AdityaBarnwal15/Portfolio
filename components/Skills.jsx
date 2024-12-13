'use client'

import { color, motion } from 'framer-motion'
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaJava } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiRedux, SiFirebase, SiFramer, SiZod, SiReactquery, SiGitlab, SiPostman, SiFigma, SiCanva, SiChakraui, SiPython, SiShadcnui } from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";
const skills = {
  design: [
    { name: 'Canva', icon: SiCanva, color: '#00ffff' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ],
  technologies: [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#007ACC' },
    { name: 'React.JS', icon: FaReact, color: '#61DAFB' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Next.JS', icon: SiNextdotjs, color: '#000000' },
    { name: 'React Hook Forms', icon: FaReact, color: '#EC5990' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Chakra UI', icon: SiChakraui, color: '#319795' },
    { name: 'Shadcn UI', icon: SiShadcnui, color: '#000000' },
    { name: 'Java', icon: FaJava, color: '#00ffff' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    { name: 'Zod', icon: SiZod, color: '#00ffff' },
    { name: 'React Query', icon: SiReactquery, color: '#FF4154' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ],
  tools: [
    { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    { name: 'GitHub', icon: FaGithub, color: '#181717' },
    { name: 'NPM', icon: FaNpm, color: '#CB3837' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  ],
};


export default function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  text-white  from-gray-100 to-gray-200 dark:bg-[#0f0715]">
      <div className="max-w-6xl mx-auto ">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center dark:text-yellow-400 text-[#170525]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="space-y-16">
          {/* Design Tools */}
          <div>
            <motion.h3 
              className="text-3xl text-center font-bold mb-8 dark:text-yellow-400 text-[#170525]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Design Tools I Use
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              {skills.design.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-4 py-2 rounded-full hover:scale-105 transition-all "
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  // transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <skill.icon className="text-xl" style={{ color: skill.color }} />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Technologies */}
          <div>
            <motion.h3 
              className="text-3xl font-bold mb-8 dark:text-yellow-400 text-[#170525] text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Technologies I Use
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {skills.technologies.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-4 py-2 rounded-full hover:scale-105 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <skill.icon className="text-xl" style={{ color: skill.color }} />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Development Tools */}
          <div>
            <motion.h3 
              className="text-3xl font-bold mb-8 dark:text-yellow-400 text-[#170525] text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Development & Productivity <br/> Tools I Use
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex justify-center items-center gap-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-4 py-2 rounded-full "
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <skill.icon className="text-xl" style={{ color: skill.color }} />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

