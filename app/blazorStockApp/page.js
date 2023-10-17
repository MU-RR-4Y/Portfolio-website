import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import BApp from '../../public/assets/projects/BlazorApp.png'


const page = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[40vh] lg:h-[60vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[60vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1'
                fill
                src={BApp}
                alt='/'
            />
            <div className='absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2'>
                <h2 className='py-2'>Ongoing Project - Blazor Server Stocks & Shares App</h2>
                <h3>Built with Blazor Server & SQLServer</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-start'>
            <div className='col-span-4'>
                <h2>Overview</h2>
                <p>
                    A Stocks and Shares application built in .NET with Blazor Server, using a SQLServer database and MudBlazor UI. Implements HTTPCLient to call 2 external APIs - a YahooFinance clone API for stock prices and a FX API to source the latest USD/GBP fx rate.   
                </p>
                <h3 className='mt-4'>Features</h3>
                <p className='py-2'>
                    The final build will feature Authentication, where a user will be able to login and view their own portfolio. This is not yet implemented, so currently all users and their respective portfolio and trading activity is visible to all. 
                </p>
                <p className='py-2'>
                    A user can be created with a linked portfolio. The user may then add and withdraw cash from their portfolio and trade stocks on the current stock list. The stock list is pulled from a Yahoo Finance clone API and, due to the limit on the free service for the API, I have limited the number of stocks to 50. The 50 stocks are a combination of top stocks in the Dow Jones and Nasdaq Indexes.
                </p>    
                <p className='py-2'>
                   Each trade triggers the recalculation of current value and performance at both the individual holding level and also portfolio level, taking into account FX as the stocks are priced in USD and the portfolios are denominated in GBP.
                </p >
                <p className='py-2'>
                  The individual stock pages and the user portfolio pages will also include a chart tracking performance over a given period. This will likely require the use of JSinterop to make use of JavaScript chart libraries and will require an additioanl API call to request Time-series data on the stocks. The additional API call and respective data models have yet to be created as I am still currently working on the other features.
                </p >
                <h3 className='mt-4'>Learning</h3>
                <p className='py-2'>
                    I have been exploring the .NET Framework and have looked at RazorPages, MVC and Blazor. I opted to build this app with Blazor as I wanted to work predominantly with C#. Blazor allows me to create the full application using C#, rather than writing the backend with C# and using a JavaScript frontend such as React.
                </p>
                <p className='py-2'>
                    I opted for Blazor Server over Blazor WebAssembly as I wanted to make use of Entity Framework and work directly with a Database for this project, rather than use a Hosted WebAssembly model.
                </p>
                <p className='py-2'>
                    I have so far learned much about Blazor and working in .NET within the Visual Studio IDE. In particular, I now have a better understanding of the use of Entity Framework in setting up, accessing and updating the Database. I have also learned the use of HTTPClient in .NET to call external APIs. I already knew how to do this in JavaScript, but now have an understanding of implementing it in C# and .NET.  
                </p>
                <p className='py-2'>
                    Over the course on this project I am looking to add Athentication and also expect to make use of the JSinterop feature of Blazor to use JS libraries for the stock chart feature. I also expect to become more proficient with MudBlazor, as this is the first occasion I have used this C# component library and I am learning the use of its components as I go.
                </p>

                

                {/* <button className='px-8 py-2 mt-4 mr-8'>Demo</button> */}
                <Link href='https://github.com/MU-RR-4Y/StocksApp'><button className='px-8 py-2 mt-4'>Code</button></Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'> 
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> C# </p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Blazor Server</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> Entity Framework</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> SQL Server</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-2'/> MudBlazor UI</p>
                      
                    </div>
                </div>
            </div>
    <Link href='/#ongoing'>
        <p className='underline cursor-pointer'>Back</p>
    </Link>
        </div>
    </div>
  )
}

export default page