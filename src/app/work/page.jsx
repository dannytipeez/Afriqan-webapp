import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Navbar from '../components/Navbar'

const work = () => {
    return (
        <main className='w-screen h-screen'>
            <Navbar />
            <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
            <Portfolio />
        </main>
    )
}

export default work