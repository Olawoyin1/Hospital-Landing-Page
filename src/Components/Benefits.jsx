import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    id: 1,
    image: "../../Images/delivery.png",
    name: "Convenient Online Ordering & Delivery",
    icon: `<LuTruck />`,
    desc: "Order medications from the comfort of your home with fast and reliable delivery services.",
  },
  {
    id: 2,
    image: "../../Images/consultation.png",
    name: "Expert Pharmacist Consultation",
    icon: `<LuUserCheck />`,
    desc: "Get professional advice on prescriptions, dosages, and health concerns from licensed pharmacists.",
  },
  {
    id: 3,
    image: "../../Images/discount.png",
    name: "Affordable Pricing & Discounts",
    icon: `<LuBadgePercent />`,
    desc: "Enjoy competitive pricing, discounts on bulk purchases, and special offers for loyal customers.",
  },
  {
    id: 4,
    image: "../../Images/medicine.png",
    name: "Wide Range of Medications",
    icon: `<LuPill />`,
    desc: "Access a comprehensive selection of prescription and over-the-counter medications, supplements, and wellness products.",
  },
  {
    id: 5,
    image: "../../Images/support.png",
    name: "24/7 Customer Support",
    icon: `<LuHeadphones />`,
    desc: "Get assistance anytime with round-the-clock customer service and emergency medication support.",
  },
  {
    id: 6,
    image: "../../Images/prescription.png",
    name: "Easy Prescription Management",
    icon: `<LuClipboardCheck />`,
    desc: "Refill prescriptions easily, track medication history, and receive reminders for refills through our user-friendly platform.",
  },
];



const Benefits = () => {
  return (
    <div className="container2">
      <div>

        <motion.div 
                  className="faq-header text-center my-3 my-md-5"
                  initial={{ opacity: 0, y: -30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5 }} 
                  viewport={{ once: true }}
                >
                  <h2 className='fw-bolder'>More Benefits, Less Hassle</h2>
                  <small className="muted">Get the most value, convenience, and enjoyment from everything we offer.</small>
                </motion.div>


        <div className="services-contents grid1 my-5">
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              className="service-card d-flex flex-column gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="p-1">
                    <img src={item.image} className="serv-image" alt="" />
                </div>
                <h6 className="fw-bold">{item.name}</h6>
                <small className="muted">{item.desc}</small>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
