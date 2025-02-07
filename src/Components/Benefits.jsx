import React from "react";
import { LuHeartPulse } from "react-icons/lu";
import { motion } from "framer-motion";

const benefits = [
  {
    id: 1,
    image: "../../Images/heart.png",
    name: " Expert Medical Care",
    icon: `<LuHeartPulse />`,
    desc: "Our team of highly trained doctors, nurses, and specialists provide top-quality healthcare for all your medical needs.",
  },
  {
    id: 2,
    image: "../../Images/protection.png",
    name: "Affordable Healthcare Plans",
    icon: "icon-smartphone",
    desc: "We provide cost-effective treatment options and insurance coverage to make healthcare accessible to all.",
  },
  {
    id: 3,
    image: "../../Images/pills.png",
    name: "Pharmacy Services",
    icon: "icon-smartphone",
    desc: "Our in-house pharmacy ensures that you receive prescribed medications quickly and conveniently.",
  },
 
];

const Benefits = () => {
  return (
    <div className="container2 mt-4">
      <div className="mt-4">

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
