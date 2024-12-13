import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animated Portfolio',
  description: 'A portfolio built with Next.js, Tailwind CSS, and Framer Motion',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

