import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import Card from '../Components/Card'
import FAQ from '../Components/FAQ'

const Services = () => {
  return (
    <div>
        <div className="faq-header text-center my-3 my-md-5">
            <h2 className='fw-bolder'>Our Services</h2>
            <small className="muted">Lorem ipsum dolor, sit amet consectetur adipisicing.</small>
        </div>
        <ServiceCard />
        <Card />
        <FAQ />
    </div>
  )
}

export default Services