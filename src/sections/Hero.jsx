import React from 'react'
import HeroText from '../components/HeroText'
import ParallelBackground from '../components/ParallelBackground'

function Hero() {
  return (
    <div className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallelBackground/>
    </div>
  )
}

export default Hero
