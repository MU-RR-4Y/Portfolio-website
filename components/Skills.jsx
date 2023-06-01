import Image from 'next/image'
import React from 'react'
import SkillEntry from './SkillEntry';
import PythonIMG from '../public/static/images/skills/python.png'
import FlaskIMG from '../public/static/images/skills/flask.png'
import PostgresSQLIMG from '../public/static/images/skills/postgresql.png'
import JavaScriptIMG from '../public/static/images/skills/javascript.png'
import ReactIMG from '../public/static/images/skills/react.png'
import NextJSIMG from '../public/static/images/skills/nextjs.png'
import NodeIMG from '../public/static/images/skills/node.png'
import TailwindCSSIMG from '../public/static/images/skills/tailwind.png'
import GithubIMG from '../public/static/images/skills/github1.png'
import JavaIMG from '../public/static/images/skills/java.png'
import UnityIMG from '../public/static/images/skills/unity.png'
import CSharpIMG from '../public/static/images/skills/c-sharp.png'


const Skills = () => {

//    TO DO - set up loop function to loop through skills object and dynamically display skill cards
   
//     const skills ={
//                     'HTML' : '/../public/assets/skills/html.png',
//                     'CSS' : '/../public/assets/skills/css.png',
//                     'Python' : '/../public/assets/skills/python.png',
//                     'PostgreSQL' : '/../public/assets/skills/postgresql.png',
//                     'JavaScript' : '/../public/assets/skills/javascript.png',
//                     'React' : '/../public/assets/skills/react.png',
//                     'Node' : '/../public/assets/skills/node.png',
//                     'MongoDb' : '/../public/assets/skills/mongodb.png',
//                     'Git' : '/../public/assets/skills/git.png',
//                     'GitHub' : '/../public/assets/skills/github1.png',
//                     'Java' : '/../public/assets/skills/java.png',
//                     'Unity' : '/../public/assets/skills/unity.png',
//                     'C#' : '/../public/assets/skills/c-sharp.png',
//                     'Next.JS' : '/../public/assets/skills/nextjspng',
//                     'Tailwind CSS' : '/../public/assets/skills/tailwind.png',

//                 }

//      for(skill in skills){
//            return <SkillEntry name = {skill} image  ={skills[skill]} />
//      }           


  return (
    <div id='skills' className='pt-20'>

   
    <div className='w-full lg:h-auto p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase font-bold text-[#1166E6]'>Skills</p>
            <h2 className='py-4'>I have worked with:</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={PythonIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={FlaskIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Flask</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={PostgresSQLIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>PostgreSQL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={JavaScriptIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={ReactIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={NextJSIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Next.JS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={NodeIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Node</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={TailwindCSSIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>TailwindCSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={GithubIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={JavaIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={UnityIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Unity</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src={CSharpIMG}
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>C#</h3>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </div>
   </div>
  )
}

export default Skills