import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michael Murray | Junior Developer',
  description: 'Michael Murray Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
