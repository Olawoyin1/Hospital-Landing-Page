import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <div className="container2">
            <div className="hero d-flex flex-md-row gap-4 gap-md-1 flex-column-reverse">
                <div className="hero-text d-flex flex-column gap-3 align-items-start justify-content-center col-md-6">
                    <h1 className='fw-bold'>Advanced Care, <br /> Personalized for You</h1>
                    <p className='muted'>Our medical experts are here to deliver specialized care tailored to your unique health needs, ensuring a healthier future.</p>
                    {/* <button className="main-btn"><span><Link to='/services'>Discover More</Link></span></button> */}
                    <Link to='/services'>
                    <button className="main-btn">
                        <span>Discover More</span>
                    </button>
                    </Link>
                </div>
                <div className="hero-img col-md-6">
                    <img src="../../Images/hero11.jpg" alt="" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero