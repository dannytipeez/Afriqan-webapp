import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image';

function Slider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div id='gallery'>
            <h1>Gallery</h1>
            <div>
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index} className=''>
                            <Image width='1440' height='600'  style={{objectFit: 'cover', height: '100%'}} src={slide.image} alt='/'
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Slider
