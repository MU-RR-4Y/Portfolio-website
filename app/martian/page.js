import Image from 'next/image'
import React from 'react'
import Martian from '../../public/assets/projects/MartianSurvival.png'
import Martian2 from '../../public/assets/projects/MartianSurvival2.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const page = () => {

    // BUILD OUT A SEPARATE COMPONENT FOR PROJECT PAGE AND PASS IN APPROPIATE PROPS

  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] lg:h-[60vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[60vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1 object-cover'
                fill
                src={Martian2}
                alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Martian Survival - Unity Game</h2>
                <h3>Unity / C#</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <h2>Overview</h2>
                <p className='py-2'>
                    Martian Survival is a 3rd person wave survival game built in Unity using C#. This was built over a 2 week period for a solo Capstone Project at CodeClan.
                </p>
                <h3 className='mt-4'> Game Mechanics</h3>
                <p className='py-2'>The player survives enemy waves by shooting enemies or building towers to kill the enemies. There are currently 10 rounds to survive, with each round offering increasing numbers of enemies. The game also incorporates a resource system. Towers cost 50 resources 
                    and, after starting with an initial 50 resources, you only gain more by killing enemies.
                </p>
                <h3 className='mt-4'>Learning</h3>
                <p className='py-2'>
                    Prior to starting this project I had no experience with either Unity or C#, however I was able to use my experience working with Java 
                    to help me learn the scripting required for C# in the game. 
                    I learned the basics of Unity and how to work with character models, animations and movement.
                </p>
                <p className='py-2'>
                   I also learned about the use of multiple cameras, lighting and building out a UI for the game, while also exploring the more advanced area of post processing.
                </p>

                {/* <div className=" w-[80%] h-auto m-auto shadow-xl shadow-[#ff914d] rounded-xl  p-4">
                <Image className="rounded-xl" 
                src={Martian2}
                alt="/" />
  </div> */}
                
                
                <Link href={'https://play.unity.com/mg/other/martian-survival'}><button className='px-8 py-2 mt-4 mr-8'>Play Game</button></Link>
                <Link href={'https://github.com/MU-RR-4Y/Martian-Survival'}><button className='px-8 py-2 mt-4'>Code</button></Link>

                
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'> 
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Unity</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> C#</p>

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