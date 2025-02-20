// import React from 'react'

// const FAQ = () => {
//   return (
//     <div className='my-4'>
//         <div className="container2">
//             <div className="faq-header text-center my-3 my-md-5">
//                 <h2 className='fw-bolder'>FAQ</h2>
//                 <small className="muted">Common Questions, Clear Answers.</small>
//             </div>
//             <div className="faqs grid4 gap-4">
//                 <div className="faq-image d-none d-md-grid">
//                     <img src="../../Images/faq2.jpg" alt="" />
//                 </div>
//                 <div className="faq-items d-flex flex-column gap-3">
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 ">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 d-none">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 d-none">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 d-none">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 d-none">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default FAQ





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from "react-icons/fi"; 

const faqs = [
  { 
    question: "What products do you offer?", 
    answer: "We provide prescription and over-the-counter medications, supplements, personal care items, and medical equipment." 
  },
  { 
    question: "Can I order medications online?", 
    answer: "Yes! You can place orders through our website, and we offer fast and reliable home delivery services." 
  },
  { 
    question: "Do you accept health insurance?", 
    answer: "Yes, we accept most major health insurance plans for prescription medications. Contact us to verify your provider." 
  },
  { 
    question: "Do I need a prescription for all medications?", 
    answer: "Some medications require a valid prescription, while others are available over-the-counter. Check with our pharmacists for more details." 
  },
  { 
    question: "Can I consult a pharmacist online?", 
    answer: "Yes! Our licensed pharmacists are available for virtual consultations to answer your medication-related questions." 
  },
  { 
    question: "What are your operating hours?", 
    answer: "Our pharmacy is open from 4:00 AM to 10:00 PM daily. Online orders can be placed 24/7." 
  },
];



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      className='my-4 mb-5 faqq'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container2">
        {/* Header */}
        <motion.div 
          className="faq-header text-center my-3 my-md-5"
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
        >
          <h2 className='fw-bolder'>FAQ</h2>
          <small className="muted">Common Questions, Clear Answers.</small>
        </motion.div>

        {/* FAQ Section */}
        <div className="faqs grid4 gap-4">
          
          {/* Image Animation - Comes in from the Left */}
          <motion.div 
            className="faq-image d-none d-md-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src="../../Images/faq2.jpg" alt="FAQ Illustration" />
          </motion.div>

          {/* FAQs Animation - Comes in from the Right */}
          <motion.div 
            className="faq-items d-flex flex-column gap-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className='question d-flex gap-3 align-items-center text-white' 
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <button className='faq-toggle-btn'>
                    {openIndex === index ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </button>
                  <p className='fw-bold'>{faq.question}</p>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="answer p-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <small className="muted">{faq.answer}</small>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
