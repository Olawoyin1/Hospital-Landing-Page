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
        <div className="container2 my-1 rounded d-flex align-items-center justify-content-center flex-column p-5 gap-3 faq-header v-cover text-center text-white " style={{backgroundImage : `url('../../Images/pham1.jpg')`}}>
            <h1 className='fw-bolder'>Our Services</h1>
            <small className="muted">Comprehensive, expert care for your health needs.</small>
        </div>
        <ServiceCard />
        <Card />
        <FAQ />
    </div>
  )
}

export default Services