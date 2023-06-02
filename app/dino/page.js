import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import Dino from '../../public/assets/projects/Dino_trumps.png'

const page = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] lg:h-[60vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[60vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1 object-cover
                 '
                fill
                src={Dino}
                alt='/'
            />
            <div className='absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2'>
                <h2 className='py-2'>Dino Trumps</h2>
                <h3 className='font-bold'>Built with JavaScript, React, Express & MongoDB</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-start'>
            <div className='col-span-4'>
                <h2>Overview</h2>
                <p>Dino Trumps is a dinosaur take on the popular card game top trumps. This was built over a week as a group project using Node.JS, React,Express & MongoDb.</p>
                <h3 className='mt-4'>Game Mechanics</h3>
                <p className='py-2'>
                    Both the player and computer begin with 15 cards and the player has the option to select one of 6 attributes to compare against the hidden computer card. 
                    Once a selection is made, the computer card is revealed and the respective value on each card is compared with the highest value winning.                  
                </p>
                <p className='py-2'>
                    The winner receives both cards to their hand and in the occurence of a draw both cards are held in a 'Draw pile'.
                    The cards in the 'Draw pile' are allocated to the winner of the next turn.
                    Currently the first to hold 20 cards in their hand wins.                      
                </p>
                <h3 className='mt-4'>Learning</h3>
                <p className='py-2'>
                    Developing the project as a part of a group of four allowed me to implement Agile princilpes - from our initial planning meetings to utilising daily standups and review of work being completed.
                    The main learning take away from this project was using Git/Github in a group project, developing across multiple branches for fixes and features and dealing with pull and merge requests and conflicts.
                </p>
                <p className='py-2'>    
                    Additionally I gained experience working with APIs, initially reviewing a host of available APIs for the game before implementing our own.
                </p>

                {/* <button className='px-8 py-2 mt-4 mr-8'>Demo</button> */}
                <Link href='https://github.com/MU-RR-4Y/top_trumps_project'><button className='px-8 py-2 mt-4'>Code</button></Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'> 
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> JavaScript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> React</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Express</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> MongoDB</p>   
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