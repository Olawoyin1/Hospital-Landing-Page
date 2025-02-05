import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="container2">
            <nav className='d-flex header align-items-center justify-content-between'>
                <h4 className="navbar-brand">Mediccal.</h4>

                <ul className="p-0 d-flex gap-3 align-items-center">
                    <li><Link className='nav-link' to="/">Home</Link></li>
                    <li><Link className='nav-link' to="/">Services</Link></li>
                    <li><Link className='nav-link' to="/">About Us</Link></li>
                    <li><Link className='nav-link' to="/">Contact</Link></li>
                </ul>

                <button className='main-btn'><span>Book Appointment</span></button>
            </nav>
        </div>
    </div>
  )
}

export default Navbar