'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [color ,setColor] = useState('transparent');
    const [textColor ,setTextColor] = useState('white');


    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(()=>{
        const changeColor = () => {
            if(window.scrollY >=90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        }
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 z-[3]  w-full duration-300 ease-in'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1 style={{color: `${textColor}`}} className='text-3xl font-bold sm:text-4xl'>Afriqan</h1>
                </Link>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                    <li className="p-4 text-3xl sm:text-xl hover:text-gray-500">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="p-4 text-3xl sm:text-xl hover:text-gray-500">
                        <Link href='/#gallery '>Gallery</Link>
                    </li>
                    <li className="p-4 text-3xl sm:text-xl hover:text-gray-500">
                        <Link href='/work'>Work</Link>
                    </li>
                    <li className="p-4 text-3xl sm:text-xl hover:text-gray-500">
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                {/*mobile button*/}
                <div onClick={handleNav} className='z-10 block sm:hidden'>
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                </div>

                {/*mobile menu*/}
                <div className={nav ? 'absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden' : 'absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black sm:hidden'} >
                    <ul>
                        <li onClick={handleNav}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav}>
                            <Link href='/#gallery'>Gallery</Link>
                        </li>
                        <li onClick={handleNav}>
                            <Link href='/work'>Work</Link>
                        </li>
                        <li onClick={handleNav}>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
