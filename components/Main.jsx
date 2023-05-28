import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Michael</span></h1>
                <h1 className="py-4 text-gray-700">A Junior Developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    I'm a Junior Developer with experience using Python, JavaScript & Java. 
                    I have also built games with Unity and C# and currently I am working on expanding my portfolio and learning new technologies.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedinIn/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                <BsPersonLinesFill/>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main