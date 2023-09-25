import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center pt-10">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
            <div  >  
                <p className="uppercase text-md font-bold tracking-widest text-[#FF914D]">LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#1166E6]">Michael</span></h1>
                <h1 className="py-4 text-gray-700">A Junior Developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    A graduate of the <span className='text-[#FF914D] font-bold'>CodeClan</span> Professional Software Development Course,  I'm a Junior Developer with experience building applications with Python, JavaScript & Java. 
                    I have also built games with Unity and C# and currently I am working on expanding my portfolio and learning new technologies.
                </p>

                <div className="flex items-center justify-around max-w-[330px] m-auto py-4">
                            <div className="rounded-full bg-[#F4F3EE] shadow-lg shadow-[#004AAD] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <Link href={'https://www.linkedin.com/in/michael-murray-92003474/'}><FaLinkedinIn/></Link>
                            </div>
                            <div className="rounded-full bg-[#F4F3EE] shadow-lg shadow-[#004AAD] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <Link href={'https://github.com/MU-RR-4Y'}><FaGithub/></Link>
                            </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Main