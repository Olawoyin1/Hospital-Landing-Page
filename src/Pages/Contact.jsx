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

import React from "react";
import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { MdErrorOutline } from "react-icons/md";
import * as Yup from "yup";

const Contact = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    subject: "",
    email: "",
    message: "",
  };

  const onSubmit = async (values, { resetForm }) => {};

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("This field is required"),
    lastname: Yup.string().required("This field is required"),
    phonenumber: Yup.string().required("This field is required"),
    subject: Yup.string().required("This field is required"),
    message: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const formData = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="my-4 contact-us py-4 my-md-5">
      <div className="text-center my-5">
        <motion.h2
          className="fw-bolder"
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
            className="d-flex flex-column align-items-start gap-2 p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid4 w-100 gap-md-2 gap-2">
              <motion.div
                className="input-field"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  value={formData.values.firstname}
                  onBlur={formData.handleBlur}
                  onChange={formData.handleChange}
                  name="firstname"
                  placeholder="Firstname"
                />
                {formData.touched.firstname && formData.errors.firstname ? (
                  <MdErrorOutline size="20" className="icon" color="red" />
                ) : null}

                {formData.touched.firstname && formData.errors.firstname ? (
                  <small className="error_m">{formData.errors.firstname}</small>
                ) : null}
              </motion.div>

              <motion.div
                className="input-field"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="lastname"
                  value={formData.values.lastname}
                  onBlur={formData.handleBlur}
                  onChange={formData.handleChange}
                  placeholder="Lastname"
                />
                {formData.touched.lastname && formData.errors.lastname ? (
                  <MdErrorOutline size="20" className="icon" color="red" />
                ) : null}

                {formData.touched.lastname && formData.errors.lastname ? (
                  <small className="error_m">{formData.errors.lastname}</small>
                ) : null}
              </motion.div>
            </div>

            <div className="grid4 w-100 gap-md-2 gap-2">
              <motion.div
                className="input-field"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.values.email}
                  onBlur={formData.handleBlur}
                  onChange={formData.handleChange}
                  placeholder="Email"
                />
                {formData.touched.email && formData.errors.email ? (
                  <MdErrorOutline size="20" className="icon" color="red" />
                ) : null}

                {formData.touched.email && formData.errors.email ? (
                  <small className="error_m">{formData.errors.email}</small>
                ) : null}
              </motion.div>

              <motion.div
                className="input-field"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone Number"
                  value={formData.values.phonenumber}
                  onBlur={formData.handleBlur}
                  onChange={formData.handleChange}
                />
                {formData.touched.phonenumber &&
                formData.errors.phonenumber ? (
                  <MdErrorOutline size="20" className="icon" color="red" />
                ) : null}

                {formData.touched.phonenumber &&
                formData.errors.phonenumber ? (
                  <small className="error_m">
                    {formData.errors.phonenumber}
                  </small>
                ) : null}
              </motion.div>
            </div>

            <motion.div
              className="input-field"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                name="subject"
                value={formData.values.subject}
                onBlur={formData.handleBlur}
                onChange={formData.handleChange}
                placeholder="Subject"
              />
              {formData.touched.subject &&
              formData.errors.subject ? (
                <MdErrorOutline size="20" className="icon" color="red" />
              ) : null}

              {formData.touched.subject &&
              formData.errors.subject ? (
                <small className="error_m">
                  {formData.errors.subject}
                </small>
              ) : null}
            </motion.div>

            <motion.div
              className="input-field"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <textarea
                name="message"
                value={formData.values.message}
                onBlur={formData.handleBlur}
                onChange={formData.handleChange}
                placeholder="Your Message"
              ></textarea>
              {formData.touched.message && formData.errors.message ? (
                <MdErrorOutline size="20" className="icon" color="red" />
              ) : null}

              {formData.touched.message && formData.errors.message ? (
                <small className="error_m">{formData.errors.message}</small>
              ) : null}
            </motion.div>

            <motion.button
              className="main-btn"
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
              {
                title: "Emergency Contact",
                text: ["Online 24/7", "08035782355"],
              },
              {
                title: "Our Address",
                text: ["7/9 Oriola street, Alapere, Ketu"],
              },
              {
                title: "Email & Fax",
                text: ["Email: Donameje@gmail.com", "Fax: 08035782355"],
              },
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
                <div className="d-flex flex-column gap-1">
                  {item.text.map((line, i) => (
                    <small className="muted" key={i}>
                      {line}
                    </small>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
