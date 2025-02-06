import React from 'react'

const Card = () => {
  return (
    <div className='my-4'>
        <div className="container2">
            <div className="trial p-md-5 p-3 d-flex align-items-center  gap-3 flex-column flex-md-row justify-content-center justify-content-md-between">
                <div className="card-text d-flex gap-3 flex-column left text-center text-md-start">
                    <h4 className='fw-bold'>Contact Us For Exceptional Care</h4>
                    <small className="muted ">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</small>
                </div>
                <button className="main-btn"><span>Contact Us</span></button>
            </div>
        </div>
    </div>
  )
}

export default Card