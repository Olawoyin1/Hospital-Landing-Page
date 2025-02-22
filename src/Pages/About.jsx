// import React from "react";
// import Intro from "../Components/Intro";
// import { IoPlayOutline } from "react-icons/io5";
// import { FaPlay } from "react-icons/fa";
// import Card from "../Components/Card";
// import FAQ from "../Components/FAQ";
// import PageIntro from "../Components/PageIntro";

// const About = () => {
//   const aboutParagraph = `At Modern Clinic, we provide advanced medical care tailored to your unique needs. With a team of skilled professionals and cutting-edge technology, we ensure high-quality treatment in a compassionate environment. \n\nYour health is our priority, and we are committed to delivering personalized care that promotes healing and well-being. Whether it's preventive screenings or specialized treatments, we are here to support you every step of the way.`;
//   return (
//     <div className="">
        
//       <div className="container2">

//         <div className="d-flex flex-column flex-md-row align-items-center gap-3 ">
//           <div className="p-5 col col-md-5">
//             <div className="intro-img">
//               <div className="intro-card">
//                 <img src="../../Images/1.jpg" alt="" />
//               </div>
//               <div className="intro-bg first"></div>
//             </div>
//           </div>
//           <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
//             <div className="d-flex flex-column">
//               <h1>Welcome To</h1>
//               <h1 className="fw-bold">Modern Clinic.</h1>
//             </div>
//             <p className="muted" style={{ whiteSpace: "pre-wrap" }}>
//               {aboutParagraph}
//             </p>
//             <div className="d-flex align-items-center gap-3">
//               <button className="btn-play">
//                 <FaPlay />
//               </button>
//               <small className="color">Whatch Video About Us</small>
//             </div>
//           </div>
//         </div>

//         <div className="d-flex flex-column-reverse flex-md-row align-items-center gap-3 ">
//           <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
//             <div className="d-flex flex-column">
//               <h2 className="fw-bold">Who We Are.</h2>
//             </div>
//             <p className="muted">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
//               corporis similique aliquid, ipsam voluptatibus velit eligendi eius
//               nihil sunt. Tenetur dignissimos deserunt sapiente illo quis culpa
//               provident nobis nemo modi.
//             </p>
//             <div className="d-flex align-items-center gap-3">
//               <button className="btn-play">
//                 <FaPlay />
//               </button>
//               <small className="color">Whatch Video About Us</small>
//             </div>
//           </div>
//           <div className="p-5 col col-md-5">
//             <div className="intro-img">
//               <div className="intro-card">
//                 <img src="../../Images/2.jpg" alt="" />
//               </div>
//               <div className="intro-bg sec"></div>
//             </div>
//           </div>
//         </div>

//         <div className="d-flex mb-4 flex-column flex-md-row align-items-center gap-3 ">
//           <div className="p-5 col col-md-5">
//             <div className="intro-img">
//               <div className="intro-card">
//                 <img src="../../Images/7.jpg" alt="" />
//               </div>
//               <div className="intro-bg first"></div>
//             </div>
//           </div>
//           <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
//             <div className="d-flex flex-column">
//               <h2 className="fw-bold">Why Patience Choose Us</h2>
//             </div>
//             <p className="muted">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
//               corporis similique aliquid, ipsam voluptatibus velit eligendi eius
//               nihil sunt. Tenetur dignissimos deserunt sapiente illo quis culpa
//               provident nobis nemo modi.
//             </p>
//             {/* <button className='main-btn d-inline-block'><span>More About Us</span></button> */}
//             <div className="d-flex align-items-center gap-3">
//               <button className="btn-play">
//                 <FaPlay />
//               </button>
//               <small className="color">Whatch Video About Us</small>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Card />
//       <FAQ />
//     </div>
//   );
// };

// export default About;







import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Card from "../Components/Card";
import FAQ from "../Components/FAQ";

// Updated meaningful content for sections
const aboutParagraph = `At Biomej Pharmacy, we are committed to providing top-quality pharmaceutical care designed to meet your unique health needs. With a team of experienced pharmacists and healthcare professionals, we offer a comprehensive range of prescription and over-the-counter medications, health and wellness products, and expert consultations. Our goal is to ensure that you receive the right medications with the right guidance, helping you make informed decisions about your health.

Beyond dispensing medications, we prioritize your well-being through personalized services such as prescription refills, medication counseling, health screenings, and vaccination programs. Whether you need expert advice, home delivery, or essential medical supplies, we are here to support you every step of the way. At Biomej Pharmacy, your health is our priority, and we are dedicated to providing safe, reliable, and compassionate care for you and your family.`;

const whoWeAreText = `Biomej Healthcare Ltd is a leader in healthcare, offering a broad range of services from preventive care to specialized treatments. We believe in the power of patient-centered care, providing not only medical expertise but also emotional support and guidance throughout your treatment journey.`;

const whyPatientsChooseUsText = `Patients choose Biomej Healthcare Ltd because of our commitment to providing personalized care. Our team is dedicated to understanding each patient's unique needs and ensuring they feel supported every step of the way. With advanced technology and compassionate professionals, we deliver the best outcomes for our patients.`;

// Animations
const fadeSlideIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

const fadeUpStagger = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 1.2 } }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // Stagger each child in a section with a delay of 0.4 seconds
    }
  }
};

const About = () => {
  return (
    <div className="about-us py-4">
      <div className="container2">
        {/* Section 1: Welcome to Modern Clinic */}
        <motion.div
          className="d-flex flex-column flex-md-row align-items-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants} // Stagger animations for this section
        >
          <motion.div className="p-5 col col-md-5" variants={fadeSlideIn}>
            <div className="intro-img">
              <div className="intro-card">
                <img src="../../Images/rx4.jpg" alt="" />
              </div>
              <div className="intro-bg first"></div>
            </div>
          </motion.div>
          <motion.div
            className="intro-content d-flex flex-column align-items-start justify-content-center gap-3"
            variants={fadeUp}
          >
            <div className="d-flex flex-column">
              <h1>Welcome To</h1>
              <h1 className="fw-bold">Biomej Healthcare Ltd.</h1>
            </div>
            <p className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {aboutParagraph}
            </p>
            <motion.div className="d-flex align-items-center gap-3" whileHover={{ scale: 1.05 }}>
              <button className="btn-play"><FaPlay /></button>
              <small className="color">Watch Video About Us</small>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section 2: Who We Are */}
        <motion.div
          className="d-flex flex-column-reverse flex-md-row align-items-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants} // Separate staggered animation for this section
        >
          <motion.div
            className="intro-content d-flex flex-column align-items-start justify-content-center gap-3"
            variants={fadeUpStagger} // Apply stagger animation for the children in this section
          >
            <div className="d-flex flex-column">
              <h2 className="fw-bold">Who We Are</h2>
            </div>
            <p className="muted">{whoWeAreText}</p>
            <motion.div className="d-flex align-items-center gap-3" whileHover={{ scale: 1.05 }}>
              <button className="btn-play"><FaPlay /></button>
              <small className="color">Watch Video About Us</small>
            </motion.div>
          </motion.div>
          <motion.div className="p-5 col col-md-5" variants={fadeUp}>
            <div className="intro-img">
              <div className="intro-card">
                <img src="../../Images/rx2.jpeg" alt="" />
              </div>
              <div className="intro-bg sec"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Section 3: Why Patients Choose Us */}
        <motion.div
          className="d-flex mb-4 flex-column flex-md-row align-items-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants} // Separate staggered animation for this section
        >
          <motion.div
            className="p-5 col col-md-5"
            variants={fadeSlideIn} // Apply slide-in animation for this section
          >
            <div className="intro-img">
              <div className="intro-card">
                <img src="../../Images/rx1.jpeg" alt="" />
              </div>
              <div className="intro-bg first"></div>
            </div>
          </motion.div>
          <motion.div
            className="intro-content d-flex flex-column align-items-start justify-content-center gap-3"
            variants={fadeUpStagger} // Apply stagger fade-up animation for this section
          >
            <div className="d-flex flex-column">
              <h2 className="fw-bold">Why Patients Choose Us</h2>
            </div>
            <p className="muted">{whyPatientsChooseUsText}</p>
            <motion.div className="d-flex align-items-center gap-3" whileHover={{ scale: 1.05 }}>
              <button className="btn-play"><FaPlay /></button>
              <small className="color">Watch Video About Us</small>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Card />
      <FAQ />
    </div>
  );
};

export default About;
