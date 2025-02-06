import React from 'react'

const Intro = () => {

    const aboutParagraph = `At [Hospital Name], we provide advanced medical care tailored to your unique needs. With a team of skilled professionals and cutting-edge technology, we ensure high-quality treatment in a compassionate environment. \n\nYour health is our priority, and we are committed to delivering personalized care that promotes healing and well-being. Whether it's preventive screenings or specialized treatments, we are here to support you every step of the way.`


  return (
    <div className='introo'>
        <div className="container2 my-4">
            <div className="d-flex flex-column flex-md-row align-items-center gap-3 ">
                <div className='p-5 col col-md-5'> 
                    <div className="intro-img">
                        <div className="intro-card">
                    
                            <img src="../../Images/1.jpg" alt="" />
                        </div>
                        <div className="intro-bg first"></div>
                    </div>
                </div>
                <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
                    <div className='d-flex flex-column'>
                        <h1>Welcome To</h1>
                        <h1 className='fw-bold'>Modern Clinic.</h1>
                    </div>
                    <p style={{ whiteSpace: "pre-wrap"}}>{aboutParagraph}</p>
                    <button className='main-btn d-inline-block'><span>More About Us</span></button>
                </div>
            </div>
        </div>

        <img src="../../Images/medic.png" className='medic med-intro' alt="" />
    </div>
  )
}

export default Intro