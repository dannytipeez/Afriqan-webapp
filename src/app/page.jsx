'use client';

import Image from 'next/image'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';
import Instagram from './components/Instagram';

export default function Home() {
  return (
    <main className='w-screen h-screen'>
      <Navbar />
      <Hero heading="AfriQan Images" message="Capture moments, Create Memories" />
      <Slider slides={SliderData} />
      <Instagram />
    </main>

  )
}
