'use client'

import React, { useState, useRef } from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import Link from 'next/link';
import emailjs from 'emailjs-com';
import {TiTick} from 'react-icons/ti';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)


    const form = useRef();

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_y4qg0td', form.current, 'K4wLkMk6iiGbIk3O_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          setSubmitted(true);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');

    }

    const sendAnotherMessage = ()=>{
        setSubmitted(false)
        
    }
    
    

  return (
    <div id='contact' className='pt-8'>

    <div className='w-full lg:h-auto'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase font-bold text-[#1166E6]'>Contact</p>
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
                            <h2 className='text-[#004aad] py-2'>Michael <span className='text-[#1166E6]'>Murray</span></h2>
                            <p className='text-[#ff914d] font-bold'>Junior Developer</p>
                            <p className='py-4'>Connect with me via LinkedIn, GitHub or send me a message.</p>
                        </div>
                        {/* social links */}
                        <div>
                            <p className='uppercase pt-8'>Connect with Me</p>
                            <div className='flex items-center justify-around py-4'>
                                    <div className="rounded-full bg-[#F4F3EE] shadow-lg shadow-[#004aad] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <Link href={'https://www.linkedin.com/in/michael-murray-92003474/'}><FaLinkedinIn/></Link>
                                    </div>
                                    <div className="rounded-full bg-[#F4F3EE] shadow-lg shadow-[#004aad] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <Link href={'https://github.com/MU-RR-4Y'}><FaGithub/></Link>
                                    </div>
                            </div>
                        </div>
                    </div>


                </div>

            {/* right-side div - contact form */}

            {/* add sent message feedback */}

            {submitted ? 
                <div className='w-full col-span-3 flex flex-col items-center'>

                <div className='flex items-center justify-center'>
                    <h2>Message Sent</h2>
                     <TiTick className='text-[#004AAD] w-10 h-10'/>
                </div>
                    
                    <button onClick={sendAnotherMessage} className='px-10 py-2 mt-4'>Send another message</button>
                </div>


                :

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form  onSubmit={sendEmail} ref={form} >
                            {/* <div className='grid md:grid-cols-2 gap-4 w-full py-2'> */}
                                <div className='flex flex-col py-2'>
                                    <label htmlFor='name' className='uppercase text-sm py-2'>Name:</label>
                                    <input 
                                    required
                                    id='name'
                                    name='name'
                                    onChange={e => setName(e.target.value)}
                                    value ={name}
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type="text" 
                                    />
                                </div>
                            {/* </div> */}
                            <div className='flex flex-col py-2'>
                                <label htmlFor='email' className='uppercase text-sm py-2'>Email:</label>
                                <input 
                                required
                                id='email'
                                name='email'
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                className='border-2 rounded-lg p-3 flex border-gray-300' 
                                type="email" 
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor='subject' className='uppercase text-sm py-2'>Subject:</label>
                                <input 
                                required
                                id='subject'
                                name='subject'
                                onChange={e => setSubject(e.target.value)}
                                value={subject}
                                className='border-2 rounded-lg p-3 flex border-gray-300' 
                                type="text" 
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label htmlFor='message' className='uppercase text-sm py-2'>Message:</label>
                                <textarea
                                required
                                id='message'
                                name='message'
                                onChange={e => setMessage(e.target.value)}
                                value={message}
                                className='border-2 rounded-lg p-3 flex border-gray-300'rows={10} 
                                ></textarea>
                            </div>
                            <button 
                            type='submit'
                            className='w-full bg-gradient-to-bl from-[#ffbd59] to-[#ff914d] p-4 text-gray-100 mt-4'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            

            }
            </div>
            <div className='flex justify-center py-12'>
                <Link href={'/'}>
                    <div className="rounded-full bg-[#F4F3EE] shadow-lg shadow-[#004AAD] p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                        <HiOutlineChevronDoubleUp className='m-auto text-[#1166E6]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
