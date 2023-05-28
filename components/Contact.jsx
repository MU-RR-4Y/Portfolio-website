import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
            {/* left-side div */}
                <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'> 
                        <div>
                            <img
                                className='rounded-xl hover:scale-105 ease-in duration-300' 
                                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8c21VQmNwQjVLQVV8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60" 
                                alt="/" 
                            />
                        </div>
                        <div>
                            <h2 className='py-2'>Name here</h2>
                            <p>Junior Developer</p>
                            <p className='py-4'>Contact details below</p>
                        </div>
                        {/* social links */}
                        <div>
                            <p className='uppercase pt-8'>Connect with Me</p>
                            <div className='flex items-center justify-between py-4'>
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

            {/* right-side div - contact form */}

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name:</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number:</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email:</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject:</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message:</label>
                                <textarea className='border-2 rounded-lg p-3 flex border-gray-300'rows={10} ></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href={'/'}>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                        <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact
