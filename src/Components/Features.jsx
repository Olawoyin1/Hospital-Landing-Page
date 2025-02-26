import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {

    const features = [
        {
            name : "Speak to a pharmacist",
            image : "../../Images/new9.jpg"
        },
        {
            name : "Book vaccination",
            image : "../../Images/new10.jpg"
        },
        {
            name : "Book a labouratory test",
            image : "../../Images/new11.jpg"
        },
        {
            name : "Order prescription medications",
            image : "../../Images/new.jpg"
        },
    ]
  return (
    <div className='my-2 py-5'>
        <div className="container2">

            <div className="header">
                <h3 className="fw-bolder text-center">Wellness Made Simple—Start with One Click.</h3>
            </div>

            <div className="f-grid gap-3">
                {
                    features.map(feature => (
                        <div className="f-card p-4 d-flex gap-2 flex-column align-items-start justify-content-end border rounded"style={{ backgroundImage: `url(${feature.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <h4 className='fw-bold text-white'>{feature.name}</h4>
                            <Link to='vaccination'>
                                <button className='main-btn'><span>Book Now</span></button>
                            </Link>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Features