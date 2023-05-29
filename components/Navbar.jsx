'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';
import { usePathname } from 'next/navigation';


const Navbar = () => {

    // STATE

    const [nav,setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBackground, setNavBackground] = useState('#ecf0f3')
    const [linkColour, setLinkColour] = useState('#1f2937')
    

    //useEffects

    useEffect(()=>{
        const handleShadow = ()=>{
            if(window.scrollY >= 90){
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])
    
    const pathname = usePathname();
  
    useEffect(()=>{
        if(
            pathname ==='/property' ||
            pathname ==='/crypto' ||
            pathname ==='/netflix' ||
            pathname ==='/twitch'
        ) {
            setNavBackground('transparent')
            setLinkColour('#ecf0f3')
        } else {
            setNavBackground('#ecf0f3')
            setLinkColour('#1f2937')
        }
    }, [pathname])




    // TOGGELMENU FUNCTION
    
    const handleNav = ()=>{
        setNav(!nav)
    }


    //RETURN

  return (
    <div 
        style={{backgroundColor: `${navBackground}`}}
        className={
        shadow ?
        "fixed w-full h-20 shadow-xl z-[100]"
        :
        "fixed w-full h-20 z-[100]"
        }>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href='/'>
                <Image 
                    src="/../public/assets/navLogo.png" 
                    alt="/" 
                    width={100} 
                    height={40}
                    />
            </Link> 
            <div>
                <ul style={{color :`${linkColour}`}}
                className="hidden md:flex">
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link>
                    <Link href='/#skills'> 
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li  className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </Link>
                </ul>



             {/* Mobile Navbar */}

             
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        {/* TOGGLE MENU */}
        <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ': ''}>  {/* sets dark background on screen behind moblie menu pop up*/}
            <div 
            className={ 
                nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                <div className="flex w-full items-center justify-between">
                    <Image 
                        src={'/../public/assets/navLogo.png'}
                        alt='/'
                        width={60}
                        height={20}
                    />
                    <div onClick={handleNav}  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className="border-b border-gray-300 my-4">
                    <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together</p>
                </div>
                <div className="py-4 flex flex-col">
                    <ul className="uppercase">
                        <Link href='/'>
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">Home</li>  {/* onClick closes mobile nav when an option is clicked */}
                        </Link>
                        <Link href='/#about'>
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li onClick={()=>setNav(false)} className="py-4 text-sm">Contact</li>
                        </Link>
                    </ul>
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-[#5651e5">Let's Connect</p>
                        <div className="flex items-center justify-between my-4 w-fullsm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedinIn/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <AiOutlineMail/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <BsPersonLinesFill/>
                            </div>
                        </div>    
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar