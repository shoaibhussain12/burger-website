import React from 'react'

export default function Banner(){
    return(
        <div className='relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7'>
            <div className='absolute inset-0 opacity-20'>
            <img src='https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?t=st=1730301838~exp=1730305438~hmac=13e7d37b738428d33f861be726051b23a85427474cfd3a5a0bf5c682bf684f39&w=996'    
                    
            alt='delicious burger banner'
            className='w-full h-full object-cover'/>
            </div>

            <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
                <h2 className='text-white sm:text-5xl font-bold mb-4'>               
                Discover Our Menu
                </h2>
                <p className='text-white text-lg text-center mb-6 max-w-xl'>
                    Shop Now for Exclusive Burger Discount!
                </p>
               


            <button type="button"
            className='bg-blue-500 text-white-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300'>
                Exciting Deals Lunch at 12PM!
            </button>
        </div>

            </div>
    )
}