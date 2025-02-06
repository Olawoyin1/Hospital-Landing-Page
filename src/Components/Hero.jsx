import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="container2">
            <div className="hero d-flex flex-md-row flex-column-reverse">
                <div className="hero-text d-flex flex-column gap-3 align-items-start justify-content-center col-md-6">
                    <h1 className='fw-bold'>Advanced Care, <br /> Personalized for You</h1>
                    <p>Our medical experts are here to deliver specialized care tailored to your unique health needs, ensuring a healthier future.</p>
                </div>
                <div className="hero-img col-md-6">
                    {/* <h1>hey</h1> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero