import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';



function Slider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div id='gallery' className='max-w-[1240px] mx-auto top-0 left-0 mt-56'>
            <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
            <div className='relative flex justify-center p-4'>

                {SliderData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>

                            <FaArrowCircleLeft
                                onClick={prevSlide}
                                size={50} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' />
                            {index === current && (
                                <Image width='1440' height='600' style={{ objectFit: 'cover', height: '100%' }} src={slide.image} alt='/'
                                />
                            )}
                            <FaArrowCircleRight onClick={nextSlide} size={50} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]' />
                            </div>
                            );
                })};
            </div>
        </div>
    )
}

export default Slider
