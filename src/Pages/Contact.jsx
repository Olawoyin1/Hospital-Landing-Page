import React from 'react'

const Contact = () => {
  return (
    <div className='my-4 my-md-5'>
        <div className="container3">
            <div className="form grid3 gap-4">
                <form action="" className=' d-flex flex-column align-items-start gap-2 p-3'>
                    <h4 className='fw-bold'>Make Appointment</h4>
                    <div className="grid4 w-100 gap-md-2 gap-3">
                        <div className="input-field">
                            <input type="text" placeholder='Firstname' />
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder='Lastname' />
                        </div>
                    </div>

                    <div className="grid4 w-100 gap-md-2 gap-3">
                        <div className="input-field">
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder='Phone Number' />
                        </div>
                    </div>

                    <div className="input-field">
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className="input-field">
                        <textarea name="" placeholder='Your Message' id=""></textarea>
                    </div>
                    <button className='main-btn'><span>Send Message</span></button>

                </form>



                <div className="hos-info d-flex flex-column justify-content-between gap-3">
                    <div className="hos-card d-flex flex-column gap-2">
                        <div className="fw-bold">
                            <p>Emergency Contact</p>
                        </div>

                        <div className='d-flex flex-column gap-1'>
                            <small className="muted">Online 24/7</small>
                            <small className="muted">08123448990</small>
                        </div>
                        
                    </div>

                    <div className="hos-card d-flex flex-column gap-2">
                        <div className="fw-bold">
                            <p>Our Address</p>
                        </div>

                        <div className='d-flex flex-column gap-1'>
                            <small className="muted">No 19, Olarewaju Clement street, Oke Oko Isawo, Ikorodu Lagos State</small>
                        </div>
                        
                    </div>

                    <div className="hos-card d-flex flex-column gap-2">
                        <div className="fw-bold">
                            <p>Email & Fax</p>
                        </div>

                        <div className='d-flex flex-column gap-1'>
                            <small className="muted">Email: yustee2017@gmail.com</small>
                            <small className="muted">Fax: 08123448990</small>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact