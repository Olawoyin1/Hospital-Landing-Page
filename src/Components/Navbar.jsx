// import React from 'react'
// import { Link } from 'react-router-dom'
// import { RiMenu3Fill } from "react-icons/ri";

// const Navbar = () => {
//   return (
//     <div className='main-navbar border-bottom'>
//         <div className="container2">
//             <nav className='d-flex header align-items-center justify-content-between'>
//                 <Link to="/"><h4 className="navbar-brand fw-bolder">Biomej Healthcare Ltd.</h4></Link>

//                 <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
//                     <li><Link className='nav-link' to="/">Home</Link></li>
//                     <li><Link className='nav-link' to="/services">Services</Link></li>
//                     <li><Link className='nav-link' to="/about">About Us</Link></li>
//                     <li><Link className='nav-link' to="/appointment">Contact</Link></li>
//                 </ul>

                
//                 <Link to='/appointment' className='d-none d-md-flex'>
//                     <button className='main-btn'><span>Book Appointment</span></button>
//                 </Link>

//                 <RiMenu3Fill />
//             </nav>
//         </div>
//     </div>
//   )
// }

// export default Navbar






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, SetScroll] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 10){
      SetScroll(true)
    }else{
      SetScroll(false)
    }
    
  })

  return (
    <div className={scroll ? "main-navbar scrolled" : "main-navbar"}>
        <div className="container2">
            <nav className='d-flex header align-items-center justify-content-between'>
                {/* Logo */}
                <Link to="/">
                    <h4 className="navbar-brand fw-bolder">Biomej Healthcare Ltd.</h4>
                </Link>

                {/* Desktop Links */}
                <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
                    <li><Link className='nav-link' to="/">Home</Link></li>
                    <li><Link className='nav-link' to="/services">Services</Link></li>
                    <li><Link className='nav-link' to="/about">About Us</Link></li>
                    <li><Link className='nav-link' to="/appointment">Contact</Link></li>
                </ul>

                {/* Desktop Appointment Button */}
                <Link to='/appointment' className='d-none d-md-flex'>
                    <button className='main-btn'>
                        <span>Book Appointment</span>
                    </button>
                </Link>

                {/* Hamburger Icon (Mobile) */}
                <RiMenu3Fill className="d-md-none" onClick={toggleMenu} />

            </nav>

            {/* Mobile Menu (Show when menu is open) */}
            {isMenuOpen && (
                <motion.div
                    className="mobile-menu"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="p-0 d-md-none">
                        <li><Link className='nav-link'onClick={toggleMenu} to="/">Home</Link></li>
                        <li><Link className='nav-link'onClick={toggleMenu} to="/services">Services</Link></li>
                        <li><Link className='nav-link'onClick={toggleMenu} to="/about">About Us</Link></li>
                        <li><Link className='nav-link'onClick={toggleMenu} to="/vaccination">Vaccination</Link></li>
                        <li><Link className='nav-link'onClick={toggleMenu} to="/appointment">Contact</Link></li>
                    </ul>
                    <Link to='/appointment' onClick={toggleMenu} className='d-md-none'>
                        <button className='main-btn'>
                            <span>Book Appointment</span>
                        </button>
                    </Link>
                </motion.div>
            )}
        </div>
    </div>
  );
};

export default Navbar;
