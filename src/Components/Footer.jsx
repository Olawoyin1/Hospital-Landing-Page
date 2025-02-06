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
                    <p className='fw-bold'>Medical Care</p>
                    <small className='text-center text-sm-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus iste molestiae iusto aliquam odit maxime laboriosam.</small>
                    <div className="socials d-flex align-items-center gap-3">
                        <FaXTwitter size={20}/>
                        <FaLinkedinIn size={20}/>
                        <GrInstagram size={20}/>
                        <FaFacebookF size={20}/>
                    </div>
                </ul>


                <ul className='p-0 mt-5 mt-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 text-center'>
                    <p className='fw-bold'>Quick Links</p>
                    <li><Link className='nav-link' to='/'>Home</Link></li>                    
                    <li><Link className='nav-link' to='/'>About Us</Link></li>                    
                    <li><Link className='nav-link' to='/'>Services</Link></li>                    
                    <li><Link className='nav-link' to='/'>Contact</Link></li>                    
                </ul>


                <ul className='p-0 mt-5 mt-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3  text-center text-sm-start'>
                    <p className='fw-bold'>Contact Details</p>
                    <li className='d-flex flex-sm-row flex-column align-items-center gap-2'>
                        <MdOutlineLocationOn size={20} />
                        <small>12, Asherifa Street Modakeke Osun State</small>
                    </li>                    
                    <li className='d-flex flex-sm-row flex-column align-items-center gap-2'>
                        <MdOutlineEmail size={14}/>
                        <small>medicalcare@gmail.com</small>
                    </li>                    
                    <li className='d-flex flex-sm-row flex-column align-items-center gap-2'>
                        <MdOutlinePhone size={14}/>
                        <small>09023433901</small>
                    </li>                    
                    <li className='d-flex flex-sm-row flex-column align-items-center gap-2'>
                        <FiClock size={14}/>
                        <small>4am - 10pm, Monday - Sunday</small>
                    </li>                                       
                </ul>


                <ul className='p-0 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 text-center text-sm-start mt-5 mt-sm-4'>
                    <p className='fw-bold'>Subscribe To Our Newsletter</p>
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