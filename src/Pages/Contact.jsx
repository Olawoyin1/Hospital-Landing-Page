// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='my-4 my-md-5'>
//         <div className="text-center my-5">
//             <h2 className='fw-bolder'>Make Appointment</h2>
//             <small className="muted">Easy & Quick Appointments.</small>
//         </div>
//         <div className="container3">
//             <div className="form grid3 gap-4">
//                 <form action="" className=' d-flex flex-column align-items-start gap-2 p-4'>
//                     <div className="grid4 w-100  gap-2">
//                         <div className="input-field">
//                             <input type="text" placeholder='Firstname' />
//                         </div>
//                         <div className="input-field">
//                             <input type="text" placeholder='Lastname' />
//                         </div>
//                     </div>

//                     <div className="grid4 w-100 gap-2">
//                         <div className="input-field">
//                             <input type="email" placeholder='Email' />
//                         </div>
//                         <div className="input-field">
//                             <input type="text" placeholder='Phone Number' />
//                         </div>
//                     </div>

//                     <div className="input-field">
//                         <input type="text" placeholder='Subject' />
//                     </div>
//                     <div className="input-field">
//                         <textarea name="" placeholder='Your Message' id=""></textarea>
//                     </div>
//                     <button className='main-btn'><span>Send Message</span></button>

//                 </form>



//                 <div className="hos-info d-flex flex-column justify-content-between gap-3">
//                     <div className="hos-card d-flex flex-column gap-2">
//                         <div className="fw-bold">
//                             <p>Emergency Contact</p>
//                         </div>

//                         <div className='d-flex flex-column gap-1'>
//                             <small className="muted">Online 24/7</small>
//                             <small className="muted">08168028145 </small>
//                         </div>
                        
//                     </div>

//                     <div className="hos-card d-flex flex-column gap-2">
//                         <div className="fw-bold">
//                             <p>Our Address</p>
//                         </div>

//                         <div className='d-flex flex-column gap-1'>
//                             <small className="muted">No 19, Olarewaju Clement street, Oke Oko Isawo, Ikorodu Lagos State</small>
//                         </div>
                        
//                     </div>

//                     <div className="hos-card d-flex flex-column gap-2">
//                         <div className="fw-bold">
//                             <p>Email & Fax</p>
//                         </div>
                        

//                         <div className='d-flex flex-column gap-1'>
//                             <small className="muted">Email: medicalcare@gmail.com</small>
//                             <small className="muted">Fax: 08168028145 </small>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Contact



import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='my-4 my-md-5'>
      <div className="text-center my-5">
        <motion.h2 
          className='fw-bolder'
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          Make Appointment
        </motion.h2>
        <motion.small 
          className="muted"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          viewport={{ once: true }}
        >
          Easy & Quick Appointments.
        </motion.small>
      </div>

      <div className="container3">
        <div className="form grid3 gap-4">
          
          {/* Form Section */}
          <motion.form 
            action="" 
            className='d-flex flex-column align-items-start gap-2 p-4' 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <div className="grid4 w-100 gap-md-2 gap-3">
              <motion.div 
                className="input-field"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                viewport={{ once: true }}
              >
                <input type="text" placeholder='Firstname' />
              </motion.div>

              <motion.div 
                className="input-field"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                viewport={{ once: true }}
              >
                <input type="text" placeholder='Lastname' />
              </motion.div>
            </div>

            <div className="grid4 w-100 gap-md-2 gap-3">
              <motion.div 
                className="input-field"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                viewport={{ once: true }}
              >
                <input type="email" placeholder='Email' />
              </motion.div>

              <motion.div 
                className="input-field"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                viewport={{ once: true }}
              >
                <input type="text" placeholder='Phone Number' />
              </motion.div>
            </div>

            <motion.div 
              className="input-field"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
            >
              <input type="text" placeholder='Subject' />
            </motion.div>

            <motion.div 
              className="input-field"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
            >
              <textarea placeholder='Your Message'></textarea>
            </motion.div>

            <motion.button 
              className='main-btn'
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
            >
              <span>Send Message</span>
            </motion.button>
          </motion.form>

          {/* Contact Info Section */}
          <div className="hos-info d-flex flex-column justify-content-between gap-3">
            {[
              { title: "Emergency Contact", text: ["Online 24/7", "08035782355"] },
              { title: "Our Address", text: ["7/9 Oriola street, Alapere, Ketu"] },
              { title: "Email & Fax", text: ["Email: Donameje@gmail.com", "Fax: 08035782355"] }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="hos-card d-flex flex-column gap-2"
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }} 
                viewport={{ once: true }}
              >
                <div className="fw-bold">
                  <p>{item.title}</p>
                </div>
                <div className='d-flex flex-column gap-1'>
                  {item.text.map((line, i) => (
                    <small className="muted" key={i}>{line}</small>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


