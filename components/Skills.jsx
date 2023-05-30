import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='pt-20'>

    <div className='w-full lg:h-auto p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase font-bold text-[#1166E6]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* can set up the skills card as a component and pass down props for each skill */}
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/html.png'
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/css.png'
                                alt='/'
                                width={64}
                                height={64}
                                />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/javascript.png'
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
                                src='/../public/assets/skills/react.png'
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
                                src='/../public/assets/skills/nextjs.png'
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
                                src='/../public/assets/skills/Node.png'
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
                                src='/../public/assets/skills/tailwind.png'
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
                                src='/../public/assets/skills/github1.png'
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





            </div>
        </div>
    </div>
   </div>
  )
}

export default Skills