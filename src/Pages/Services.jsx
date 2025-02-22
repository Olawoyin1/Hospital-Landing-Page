import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import Card from '../Components/Card'
import FAQ from '../Components/FAQ'
import SEO from '../Components/SEO'

const Services = () => {
  return (
    <div className='our-services py-4'>
      <SEO 
        title="Biomej Healthcare | Trusted Pharmacy in Lagos" 
        description="Get high-quality medications and healthcare services at Biomej Healthcare, your trusted pharmacy in Lagos." 
        keywords="pharmacy, healthcare, medications, Lagos, prescription drugs" 
        url="https://biomejhealthcare.com"
      />
        <div className="faq-header text-center my-5">
            <h2 className='fw-bolder'>Our Services</h2>
            <small className="muted">Comprehensive, expert care for your health needs.</small>
        </div>
        <ServiceCard />
        <Card />
        <FAQ />
    </div>
  )
}

export default Services