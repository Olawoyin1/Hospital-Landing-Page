import React from 'react'

const Intro = () => {

    const aboutParagraph = `At Biomej Pharmacy, we are committed to providing top-quality pharmaceutical care designed to meet your unique health needs. With a team of experienced pharmacists and healthcare professionals, we offer a comprehensive range of prescription and over-the-counter medications, health and wellness products, and expert consultations. Our goal is to ensure that you receive the right medications with the right guidance, helping you make informed decisions about your health.

Beyond dispensing medications, we prioritize your well-being through personalized services such as prescription refills, medication counseling, health screenings, and vaccination programs. Whether you need expert advice, home delivery, or essential medical supplies, we are here to support you every step of the way. At Biomej Pharmacy, your health is our priority, and we are dedicated to providing safe, reliable, and compassionate care for you and your family.`


  return (
    <div className='introo my-5'>
        <div className="container2 my-4">
            <div className="d-flex flex-column flex-md-row align-items-center gap-3 ">
                <div className='p-5 col col-md-5'> 
                    <div className="intro-img">
                        <div className="intro-card">
                    
                            <img src="../../Images/rx4.jpg" alt="" />
                        </div>
                        <div className="intro-bg first"></div>
                    </div>
                </div>
                <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
                    <div className='d-flex flex-column'>
                        <h1>Welcome To</h1>
                        <h1 className='fw-bold'>Biomej Healthcare Ltd.</h1>
                    </div>
                    <p className='muted' style={{ whiteSpace: "pre-wrap"}}>{aboutParagraph}</p>
                    <button className='main-btn d-inline-block'><span>More About Us</span></button>
                </div>
            </div>
        </div>

        <img src="../../Images/medic.png" className='medic med-intro' alt="" />
    </div>
  )
}

export default Intro