import React from 'react'
import Card from '../Components/Card'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import FAQ from '../Components/FAQ'
import Benefits from '../Components/Benefits'

const Home = () => {
  return (
    <div className='home'>
    <Hero />
    <Intro />
    <Card />
    <FAQ /> 
    <Benefits />
    <img className='medic d-none d-md-block med-home' src="../../Images/medic.png" alt="" />
    </div>
  )
}

export default Home