'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import axios from 'axios';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      console.log("Submitting form with values:", values);  // Debugging
      const response = await axios.post('/api/send', values);
      if (response.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
        form.reset();
        console.log('Success:', response.data);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error:', error);
    }
  };
  

  
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const formElement = formRef.current
    if (formElement) {
      formElement.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (formElement) {
        formElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  useEffect(() => {
    controls.start({
      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.2) 0%, rgba(250, 204, 21, 0) 50%)`,
    })
  }, [mousePosition, controls])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-[#0f0715] text-white overflow-hidden" id="contact-section">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center text-yellow-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <motion.div
          ref={formRef}
          className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute inset-0 z-0"
            animate={controls}
            transition={{ type: 'tween', ease: 'linear' }}
          />
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Send className="w-12 h-12 text-black" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Message Sent!</h3>
              <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-yellow-400 transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-yellow-400 transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message" {...field} className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-yellow-400 transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Anurag Singh. All rights reserved.</p>
      </footer>
    </section>
  )
}

