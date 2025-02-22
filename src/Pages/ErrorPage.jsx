import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../Components/SEO'

const ErrorPage = () => {
  return (
    <div>
        <SEO 
        title="Biomej Healthcare | Trusted Pharmacy in Lagos" 
        description="Get high-quality medications and healthcare services at Biomej Healthcare, your trusted pharmacy in Lagos." 
        keywords="pharmacy, healthcare, medications, Lagos, prescription drugs" 
        url="https://biomejhealthcare.com"
      />
        <div className="container2">
            <div className="error d-flex align-items-center justify-content-center flex-column gap-3">
                <h1 className='fw-bolder' style={{fontSize:'7rem'}}>Oops!</h1>
                <h1 className='fw-bold'>404 Not Found</h1>
                <p className='text-center'>Your visited page not found. You may go home page.</p>
                <Link to="/" >
                    <button className='main-btn'><span>Back to home page</span></button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage