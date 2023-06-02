'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Logo from '../public/static/images/nav_Logo.png'


const Navbar = () => {

    // STATE

    const [nav,setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBackground, setNavBackground] = useState('');
    const [linkColour, setLinkColour] = useState('#1166e6');
    const [mobileMenu, setMobileMenu] = useState('#004AAD')
    

// useEffects

    // useEffect(()=>{
    //     const handleShadow = ()=>{
    //         if(window.scrollY >= 30){
    //             setShadow(true)
    //         } else {
    //             setShadow(false)
    //         }
    //     }
    //     window.addEventListener('scroll', handleShadow);
    // }, [])
    
    const pathname = usePathname();

    useEffect(()=>{
        const handleNavBg = ()=>{
            if(pathname==='/' && window.scrollY>1){
                    setShadow(true)
                    setNavBackground('#F4F3EE')
                } else {
                    setShadow(false)
                    setNavBackground('transparent')
                           }
            
        }
        window.addEventListener('scroll', handleNavBg);
    }, [pathname])
    
  
    useEffect(()=>{
        if(
            pathname ==='/martian' ||
            pathname ==='/dino' ||
            pathname ==='/travel-wishlist' 
            
        ) {
            setNavBackground('transparent')
            setLinkColour('#F4F3EE')
            setMobileMenu('#F4F3EE')
        } else {
            const oldNavBackground = navBackground
            setNavBackground('transparent')
            setLinkColour('#1166e6')
            setMobileMenu('#1166e6')
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
        "fixed w-full h-20 shadow-lg z-[100]"
        :
        "fixed w-full h-20 z-[100]"
        }>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href='/'>
                <Image 
                    src={Logo} 
                    alt="/" 
                    width={100} 
                    height={100}
                    />
            </Link> 
            <div>
                <ul style={{color :`${linkColour}`}}
                className="hidden md:flex">
                    <Link href='/'>
                        <li className="ml-10 text-sm font-bold uppercase hover:border-b"> Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className="ml-10 text-sm uppercase hover:border-b font-bold">About</li>
                    </Link>
                    <Link href='/#skills'> 
                        <li className="ml-10 text-sm uppercase hover:border-b font-bold">Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className="ml-10 text-sm uppercase hover:border-b font-bold">Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li  className="ml-10 text-sm uppercase hover:border-b font-bold">Contact</li>
                    </Link>
                </ul>



             {/* Mobile Navbar */}

             
                <div onClick={handleNav} style={{color : `${mobileMenu}`}} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        {/* TOGGLE MENU */}
        <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ': ''}>  {/* sets dark background on screen behind moblie menu pop up*/}
            <div 
            className={ 
                nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F4F3EE] p-10 ease-in duration-500' 
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                <div className="flex w-full items-center justify-between">
                <Link href='/'>
                    <Image 
                        src={Logo}
                        alt='/'
                        width={100}
                        height={40}
                    />
                </Link>    
                    <div onClick={handleNav}  
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
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
                        <div className="flex  justify-around my-4 w-fullsm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-[#004AAD] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <Link href={'https://www.linkedin.com/in/michael-murray-92003474/'}><FaLinkedinIn/></Link>
                            </div>
                            <div className="rounded-full shadow-lg shadow-[#004AAD] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <Link href={'https://github.com/MU-RR-4Y'}><FaGithub/></Link>
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