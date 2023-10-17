import React from 'react'
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import BApp from '../public/assets/projects/BlazorApp.png'

const Ongoing = () => {
  return (
    <div id='ongoing' className='pt-8'>
    <div className ="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"> 
            {/* <div className="w-full md:  h-auto p-2 flex items-center py-16"> */}
            <div className='flex flex-col col-span-3'>
            <p className="uppercase text-xl tracking-widest font-bold text-[#1166E6]">Current Projects</p>
            <h2 className="py-4">What I'm working on</h2>
            </div>

            <div className="w-full md:h-auto p-2 flex flex-col items-center  col-span-1"> 
                    <ProjectItem 
                        title ='Blazor Stocks & Shares App' 
                        backgroundImg = {BApp} 
                        technology='Blazor Server, SQLServer'
                        projectUrl='/blazorStockApp' 
                        />  
            </div>       


            <div className="col-start-2 col-span-2">
                
                <p className="py-2 text-gray-600"> I am currently working on building a Stocks and Shares trading application using Blazor Server, SQLServer and MudBlazor UI.</p> 
                <p className="py-2 text-gray-600"> Since finishing CodeClan I have looked at a number of other technologies and this has included C# and the .NET Framework. I have been learning about the different web developemnet models in .NET - RazorPages, MVC and Blazor - opting to use the component based model of Blazor to build this application.</p> 
                <p className="py-2 text-gray-600"> The application currently uses a SQLServer Database and calls 2 separate APIs to source Stock pricing data and FX data. </p> 
            </div>
    </div>
    {/* </div> */}
    </div>
  )
}

export default Ongoing