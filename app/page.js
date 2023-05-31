import About from '@/components/About'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <div  className='bg-center bg-cover bg-no-repeat custom-img'>
      
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
