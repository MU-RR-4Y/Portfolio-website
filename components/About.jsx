import React from 'react'

const About = () => {
  return (
    <div id='about' className='pt-8'>

    <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className ="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"> 
            <div className="col-span-2">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                <h2 className="py-4">Who I Am</h2>
                <p className="py-2 text-gray-600">A junior software developer recently graduated from Codeclan, I have a background of 9 years in Investment Banking Operations across various roles. 
                   Used to working in a high volume and fast paced environment, I am a quick learner and problem solver. This makes me adaptable to any situation.
                </p> 
                <p className="py-2 text-gray-600">
                   I became aware of software development while working on projects within my prior roles and I quickly took an interest in the area. 
                   I initially explored self learning as a hobby and then opted to pursue a career change via CodeClan’s Software Development course 
                   and I am now eager to build upon my new skills as I grow my career as a developer.
                </p>
                <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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