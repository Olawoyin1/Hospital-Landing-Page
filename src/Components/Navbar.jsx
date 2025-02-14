import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main-navbar border-bottom'>
        <div className="container2">
            <nav className='d-flex header align-items-center justify-content-between'>
                <Link to="/"><h4 className="navbar-brand fw-bolder">Mediccal.</h4></Link>

                <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
                    <li><Link className='nav-link' to="/">Home</Link></li>
                    <li><Link className='nav-link' to="/services">Services</Link></li>
                    <li><Link className='nav-link' to="/about">About Us</Link></li>
                    <li><Link className='nav-link' to="/appointment">Contact</Link></li>
                </ul>

                <Link to='/appointment'>
                    <button className='main-btn'><span>Book Appointment</span></button>
                </Link>
            </nav>
        </div>
    </div>
  )
}

export default Navbar