import React from 'react'

const FAQ = () => {
  return (
    <div className='my-4'>
        <div className="container2">
            <div className="faq-header text-center my-3 my-md-5">
                <h2 className='fw-bolder'>FAQ</h2>
                <small className="muted">Lorem ipsum dolor, sit amet consectetur adipisicing.</small>
            </div>
            <div className="faqs grid4 gap-4">
                <div className="faq-image d-none d-md-grid">
                    <img src="../../Images/faq2.jpg" alt="" />
                </div>
                <div className="faq-items d-flex flex-column gap-3">
                    <div className="faq-item">
                        <div className='question d-flex gap-3 align-items-center text-white'>
                            <button>+</button>
                            <p className='fw-bold'>What is Your Name</p>
                        </div>
                        <div className="answer p-2 ">
                            <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className='question d-flex gap-3 align-items-center text-white'>
                            <button>+</button>
                            <p className='fw-bold'>What is Your Name</p>
                        </div>
                        <div className="answer p-2 d-none">
                            <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className='question d-flex gap-3 align-items-center text-white'>
                            <button>+</button>
                            <p className='fw-bold'>What is Your Name</p>
                        </div>
                        <div className="answer p-2 d-none">
                            <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className='question d-flex gap-3 align-items-center text-white'>
                            <button>+</button>
                            <p className='fw-bold'>What is Your Name</p>
                        </div>
                        <div className="answer p-2 d-none">
                            <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className='question d-flex gap-3 align-items-center text-white'>
                            <button>+</button>
                            <p className='fw-bold'>What is Your Name</p>
                        </div>
                        <div className="answer p-2 d-none">
                            <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ