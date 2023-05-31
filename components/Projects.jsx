import Image from 'next/image'
import React from 'react'
import TW from '../public/assets/projects/TravelWishlist.png'
import TW2 from '../public/assets/projects/TravelWishlist2.png'
import Dino from '../public/assets/projects/Dino_trumps.png'
import Martian from '../public/assets/projects/MartianSurvival.png'
import Martian2 from '../public/assets/projects/MartianSurvival2.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='pt-8'>

    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase font-bold text-[#1166E6]'>Projects</p>
            <h2 className='py-4'>What I've built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                title ='Martian Survival' 
                backgroundImg = {Martian} 
                technology='Unity & C#'
                projectUrl='/martian' 
                />
                <ProjectItem 
                title ='Dino Trumps' 
                backgroundImg = {Dino} 
                technology='React.JS, Express, MondoDB'
                projectUrl='/dino' 
                />
                <ProjectItem 
                title ='Travel Wishlist App' 
                backgroundImg = {TW} 
                technology='Python, Flask, PostgreSQL'
                projectUrl='/travel-wishlist' 
                />             

            </div>
        </div>

    </div>
</div>
  )
}

export default Projects