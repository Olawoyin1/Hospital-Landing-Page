import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="container2">
            <nav className='d-flex header align-items-center justify-content-between'>
                <h4 className="navbar-brand fw-bolder">Mediccal.</h4>

                <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
                    <li><Link className='nav-link' to="/">Home</Link></li>
                    <li><Link className='nav-link' to="/services">Services</Link></li>
                    <li><Link className='nav-link' to="/about">About Us</Link></li>
                    <li><Link className='nav-link' to="/appointment">Contact</Link></li>
                </ul>

                <button className='main-btn'><span>Book Appointment</span></button>
            </nav>
        </div>
    </div>
  )
}

export default Navbar