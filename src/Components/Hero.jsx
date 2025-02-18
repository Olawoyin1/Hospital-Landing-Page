// import React from 'react'
// import { Link } from 'react-router-dom'

// const Hero = () => {
//   return (
//     <div>
//         <div className="container2">
//             <div className="hero d-flex flex-md-row gap-4 gap-md-1 flex-column-reverse">
//                 <div className="hero-text d-flex flex-column gap-3 align-items-start justify-content-center col-md-6">
//                     <h1 className='fw-bold'>Advanced Care, <br /> Personalized for You</h1>
//                     <p className='muted'>Our medical experts are here to deliver specialized care tailored to your unique health needs, ensuring a healthier future.</p>
//                     {/* <button className="main-btn"><span><Link to='/services'>Discover More</Link></span></button> */}
//                     <Link to='/services'>
//                     <button className="main-btn">
//                         <span>Discover More</span>
//                     </button>
//                     </Link>
//                 </div>
//                 <div className="hero-img col-md-6">
//                     <img src="../../Images/hero11.jpg" alt="" />
                    
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero





import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  // Animation variants for individual text elements
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  // Stagger container animation for text
  const staggerContainer = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.3, // Stagger delay for child elements
        when: "beforeChildren" // Ensures stagger starts before child animations
      } 
    }
  }

  // Animation for the hero image (slides in from the right)
  const fadeSlideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  return (
    <div className='mt-5'>
      <div className="container2">
        <motion.div
          className="hero d-flex flex-md-row gap-4 gap-md-1 flex-column-reverse"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Hero Text */}
          <motion.div
            className="hero-text d-flex flex-column gap-3 align-items-start justify-content-center col-md-6"
            variants={staggerContainer} // Apply stagger animation to child elements
          >
            <motion.h1 className='fw-bold' variants={fadeUp}>
              Advanced Care, <br /> Personalized for You
            </motion.h1>
            <motion.p className='muted' variants={fadeUp}>
              Our medical experts are here to deliver specialized care tailored to your unique health needs, ensuring a healthier future.
            </motion.p>
            <Link to='/services'>
              <motion.button className="main-btn" variants={fadeUp}>
                <span>Discover More</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="hero-img col-md-6"
            variants={fadeSlideInRight} // Animation for hero image
          >
            <img src="../../Images/hero11.jpg" alt="Hero" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
