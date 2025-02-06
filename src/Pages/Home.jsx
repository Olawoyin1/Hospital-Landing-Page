import React from 'react'
import Card from '../Components/Card'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import FAQ from '../Components/FAQ'

const Home = () => {
  return (
    <div className='home'>
    <Hero />
    <Intro />
    <Card />
    <FAQ /> 
    <img className='medic med-home' src="../../Images/medic.png" alt="" />
    </div>
  )
}

export default Home