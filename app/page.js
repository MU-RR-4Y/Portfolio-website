import About from '@/components/About'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Image from 'next/image'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <div >
      
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
