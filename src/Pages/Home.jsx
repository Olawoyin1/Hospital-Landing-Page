import React from 'react'
import Card from '../Components/Card'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import FAQ from '../Components/FAQ'
import Benefits from '../Components/Benefits'
import SEO from '../Components/SEO'
import Features from '../Components/Features'

const Home = () => {
  return (
    <div className='home'>
      <SEO 
        title="Biomej Healthcare | Trusted Pharmacy in Lagos" 
        description="Get high-quality medications and healthcare services at Biomej Healthcare, your trusted pharmacy in Lagos." 
        keywords="pharmacy, healthcare, medications, Lagos, prescription drugs" 
        url="https://biomejhealthcare.com"
      />
    <Hero />
    <Features />
    <Intro />
    <Card />
    <FAQ /> 
    <Benefits />
    <img className='medic d-none d-md-block med-home' src="../../Images/medic.png" alt="" />
    </div>
  )
}

export default Home