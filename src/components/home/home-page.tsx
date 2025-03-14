import React from 'react'
import Hero from './hero'
import Highlighted from './highlighted'
import Footer from './footer'

export default function HomePage() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Hero />
      <Highlighted />
  <Footer  />
    </div>
  )
}
