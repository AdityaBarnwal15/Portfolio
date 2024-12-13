'use client'

import { motion } from 'framer-motion'
import { Calendar, GraduationCap, Building2, MapPin } from 'lucide-react'

const education = [
  {
    period: '2021',
    type: 'Higher secondary',
    degree: {
      type: "Higher Secondary",
      name: '12th'
    },
    title: 'Higher Secondary',
    university: 'Nepali Para Hindi High School',
    location: 'Durgapur, West Bengal, India'
  },
  {
    period: '2022 - 2026',
    type: 'Graduation',
    degree: {
      type: "Bachelor's Degree",
      name: 'B.Tech'
    },
    title: 'Bachelor of Technology',
    university: 'NSHM Knowledge Campus, Durgapur',
    location: 'Durgapur, West Bengal, India'
  }
]

export default function EducationSection() {
  return (
    <section className=" bg-white dark:bg-[#0f0715] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center text-yellow-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 ">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              className="bg-gradient-to-br bg-[#170525] dark:bg-white rounded-3xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-yellow-600 font-medium">{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full">
                  <GraduationCap className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-yellow-600 font-medium">{edu.type}</span>
                </div>
              </div>

              {/* Degree Pills */}
              <div className="flex gap-2 mb-4">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                  {edu.degree.type}
                </span>
                <span className="bg-gray-800 px-3 text-gray-300 py-1 rounded-full text-sm">
                  {edu.degree.name}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-900">
                {edu.title}
              </h3>

              {/* University and Location */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 ">
                  <Building2 className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-gray-300 dark:text-black">{edu.university}</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-gray-300 dark:text-black">{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

