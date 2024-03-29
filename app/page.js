import About from '@/components/About'
import Ongoing from '@/components/Ongoing'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { Analytics } from '@vercel/analytics/react';


export default function Home() {
  return (
    <div  className='bg-center bg-cover bg-no-repeat custom-img'>
      
      <Main/>
      <About/>
      <Ongoing/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Analytics/>
    </div>
  )
}
