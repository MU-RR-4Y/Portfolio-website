import React from 'react'
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='pt-8'>

    <div className="w-full md:h-auto p-2 flex items-center py-16">
        <div className ="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"> 
            <div className="col-span-2">
                <p className="uppercase text-xl tracking-widest font-bold text-[#1166E6]">About</p>
                <h2 className="py-4">Who I Am</h2>
                <p className="py-2 text-gray-600">A junior software developer recently graduated from Codeclan, I have a background of 9 years in Investment Banking Operations across various roles. 
                    I am used to working in a high volume and fast paced environment, I am a quick learner and love to tackle and solve problems. 
                </p> 
                <p className="py-2 text-gray-600">
                  I initially explored software development through self-learning as a hobby and then opted to pursue a career change via CodeClan’s Software Development course 
                   and I am now eager to build upon my new skills as I grow my career as a developer.
                </p>
                <p className="py-2 text-gray-600">
                  The CodeClan course was an intensive full time 16-week bootcamp covering fundamentals of development in Python, Javascript & Java. I completed over 800 hours of coding, finishing 2 solo projects and a group project in the process.
                </p>
                <Link href={'/#projects'}><p className="py-2 text-[#ff914d] font-bold underline cursor-pointer">Check out my projects</p></Link>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-[#ff914d] rounded-xl flex items-center justify-center p-4">
                <img className="rounded-xl" 
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxzbVVCY3BCNUtBVXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" 
                alt="/" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default About