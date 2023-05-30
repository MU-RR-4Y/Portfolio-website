import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import Dino from '../../public/assets/projects/Dino_trumps.png'

const page = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1 object-cover'
                fill
                src={Dino}
                alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Dino Trumps</h2>
                <h3>Built with React.JS Express & MongoDB</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>This app was built using ****** and i learned ******</p>
                {/* <button className='px-8 py-2 mt-4 mr-8'>Demo</button> */}
                <button className='px-8 py-2 mt-4'>Code</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'> 
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> React</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Tailwind CSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> JavaScript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Firebase</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Google API</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Zillow API</p>
                    </div>
                </div>
            </div>
    <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
    </Link>
        </div>
    </div>
  )
}

export default page