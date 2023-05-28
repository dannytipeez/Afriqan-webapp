import React from 'react'

function Hero({ heading, message }) {
    return (
            <div className='flex items-center justify-center w-screen h-screen mb-[-10rem] bg-fixed bg-center bg-cover custom-img'>
                {/*overlay */}
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-[2]' />
                <div className='p-8 text-white z-[2] mt-[-10rem]'>
                    <h2 className='text-5xl font-bold'>{heading}</h2>
                    <p className='py-5 text-xl'>{message}</p>
                    <button className='px-8 py-2 border'>Book</button>
                </div>
            </div>
    )
}

export default Hero
