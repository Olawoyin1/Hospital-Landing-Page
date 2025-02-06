import React from 'react'

const Intro = () => {
  return (
    <div className='introo'>
        <div className="container2 my-4">
            <div className="d-flex flex-column flex-md-row align-items-center gap-5 ">
                <div className='p-5 col col-md-5'> 
                    <div className="intro-img">
                        <div className="intro-card">
                    
                            <img src="../../Images/1.jpg" alt="" />
                        </div>
                        <div className="intro-bg"></div>
                    </div>
                </div>
                <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
                    <div className='d-flex flex-column'>
                        <h1>Welcome To</h1>
                        <h1 className='fw-bold'>Modern Clinic.</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam quam sed, maxime neque a eligendi harum eaque eveniet cupiditate?</p>
                    <button className='main-btn d-inline-block'><span>More About Us</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro