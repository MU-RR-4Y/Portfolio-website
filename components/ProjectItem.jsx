import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ProjectItem = ({title, backgroundImg, technology, projectUrl} ) => {
  return (
    
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#004aad] to-[#1166e6] hover:scale-105 ease-in duration-300 '>
            <Image
                className='rounded-xl h-full group-hover:opacity-10 '
                src={backgroundImg}
                alt='/'
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{technology}</p>
                <Link href={projectUrl}>
                    <p className='text-center p-3 rounded-lg bg-gradient-to-bl from-[#ffbd59] to-[#ff914d] text-[#f4f3ee] font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
        </div>

    
  )
}

export default ProjectItem