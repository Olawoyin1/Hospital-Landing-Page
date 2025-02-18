import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className='py-2 footer pb-5 m-0'>
        <div className="container2">
            <div className="grid flex-wrap">

                <ul className='p-0  mt-5 mt-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 '>
                    <h6 className='fw-bold'>Medical Care</h6>
                    <small className='text-center text-sm-start'>Get the care you deserve with our reliable, professional, and patient-focused healthcare services.</small>
                    <div className="socials d-flex align-items-center gap-3">
                        <FaXTwitter className='muted' size={20}/>
                        <FaLinkedinIn className='muted' size={20}/>
                        <GrInstagram className='muted' size={20}/>
                        <FaFacebookF className='muted' size={20}/>
                    </div>
                </ul>


                <ul className='p-0 mt-5 mt-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 text-center'>
                    <h6 className='fw-bold'>Quick Links</h6>
                    <li><Link className='nav-link' to='/'>Home</Link></li>                    
                    <li><Link className='nav-link' to='/about'>About Us</Link></li>                    
                    <li><Link className='nav-link' to='/services'>Services</Link></li>                    
                    <li><Link className='nav-link' to='/appointment'>Contact</Link></li>                    
                </ul>


                <ul className='p-0 mt-5 mt-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3  text-center text-sm-start'>
                    <h6 className='fw-bold'>Contact Details</h6>
                    <li className='d-flex flex-sm-row flex-column align-items-center gap-2'>
                        <MdOutlineLocationOn size={20} />
                        <small>7/9 Oriola street, Alapere, Ketu</small>
                    </li>                    
                    <li className='d-flex flex-sm-row flex-column align-items-center gap-2'>
                        <MdOutlineEmail size={14}/>
                        <small>Donameje@gmail.com</small>
                    </li>                    
                    <li className='d-flex flex-sm-row flex-column align-items-center gap-2'>
                        <MdOutlinePhone size={14}/>
                        <small className="fw-bolder lead"> +(234) 8035782355</small>
                    </li>                    
                    <li className='d-flex flex-sm-row flex-column align-items-center gap-2'>
                        <FiClock size={14}/>
                        <small>4am - 10pm, Monday - Sunday</small>
                    </li>                                       
                </ul>


                <ul className='p-0 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 text-center text-sm-start mt-5 mt-sm-4'>
                    <h6 className='fw-bold'>Subscribe To Our Newsletter</h6>
                    <small>Stay updated and always be in the know with the latest news and health tips.</small>                   
                    <form action="" className='d-flex footer-form'>
                        <input type="text" placeholder='Your Email..' />
                        <button className='main-btn'><span>Subscribe</span></button>
                    </form>                  
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Footer