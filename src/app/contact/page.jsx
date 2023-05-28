import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const contact = () => {
    return (
        <main className='w-screen h-screen'>
            <Navbar />
            <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
            <Contact />
        </main>
    )
}

export default contact