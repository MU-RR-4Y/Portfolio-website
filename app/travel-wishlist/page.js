import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import TW from '../../public/assets/projects/TravelWishlist.png'
import TW2 from '../../public/assets/projects/TravelWishlist2.png'

const page = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] lg:h-[60vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[60vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1'
                fill
                src={TW}
                alt='/'
            />
            <div className='absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2'>
                <h2 className='py-2'>Travel Wishlist App</h2>
                <h3>Built with Python, Flask & PostgreSQL</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-start'>
            <div className='col-span-4'>
                <h2>Overview</h2>
                <p>
                    Travel Wishlist is a CRUD app built as a solo project within a week using Flask, Python and PostgreSQL. The frontend was created using only HTML and CSS, no use of any Javascript or libraries. 
                </p>
                <h3 className='mt-4'>Features</h3>
                <p className='py-2'>
                    Users may create a wishlist of destinations they wish to visit and then when they have visited a destination it can be updated on their profile as such. 
                    The app tracks which destinations a user has added to their wishlist and also which destinations each user has visited.
                </p>
                <p className='py-2'>
                    Users may also add new destinations to the app if they cannot find the one they are seaching for and there is a 'Travel Leaderboard' which ranks users based on how many of the destinations they have visited.
                </p >
                <h3 className='mt-4'>Learning</h3>
                <p className='py-2'>
                    This was my first project and I learned a great deal, but primarily I learned about working with the relational tables in the database to implement the CRUD functionailty and using testing in development.
                </p>
                

                {/* <button className='px-8 py-2 mt-4 mr-8'>Demo</button> */}
                <Link href='https://github.com/MU-RR-4Y/Travel-Wishlist---Python-Web-App-Project'><button className='px-8 py-2 mt-4'>Code</button></Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'> 
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Python</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Flask</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> PostgreSQL</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> HTML</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> CSS</p>
                      
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