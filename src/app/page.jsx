'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';

export default function Home() {
  const router = useRouter();

  return (
    <main className='w-screen h-screen'>
      <Navbar />
      <Hero heading="AfriQan Images" message="Capture moments, Create Memories" />
      <Slider slides={SliderData} />
    </main>
  )
}
