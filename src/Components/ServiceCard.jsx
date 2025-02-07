import React from "react";
import { motion } from "framer-motion";

const services = [
    {
      id: 1,
      image: "../../Images/heart.png",
      name: "Heart Surgery",
      icon: `<LuHeartPulse />`,
      desc: "We provide advanced cardiac surgery, including bypass surgery and valve replacement, to ensure better heart health and improved quality of life.",
    },
    {
      id: 2,
      image: "../../Images/blood.png",
      name: "Blood Testing",
      icon: "icon-blood-test",
      desc: "Our comprehensive blood tests help diagnose diseases, monitor health conditions, and assess overall wellness with fast and accurate results.",
    },
    {
      id: 3,
      image: "../../Images/dna.png",
      name: "DNA Testing",
      icon: "icon-dna",
      desc: "We offer precise genetic testing to identify hereditary conditions, determine ancestry, and provide personalized medical insights.",
    },
    {
      id: 4,
      image: "../../Images/witness.png",
      name: "Eye Treatment",
      icon: "icon-eye-care",
      desc: "From vision correction to cataract surgery, our ophthalmologists provide expert care to protect and restore your eyesight.",
    },
    {
      id: 5,
      image: "../../Images/tooth.png",
      name: "Dental Care",
      icon: "icon-dental-care",
      desc: "Our dental specialists offer routine checkups, teeth cleaning, braces, and other treatments to keep your smile healthy and bright.",
    },
    {
      id: 6,
      image: "../../Images/ambulance.png",
      name: "Emergency Services",
      icon: "icon-ambulance",
      desc: "Our 24/7 emergency care unit is equipped to handle critical cases with rapid response and expert medical attention.",
    },
    {
      id: 7,
      image: "../../Images/pills.png",
      name: "Pharmacy Services",
      icon: "icon-pharmacy",
      desc: "Our in-house pharmacy ensures you get prescribed medications promptly with expert advice on safe and effective usage.",
    },
    {
      id: 8,
      image: "../../Images/stethoscope.png",
      name: "Outdoor Checkup",
      icon: "icon-checkup",
      desc: "We provide home visits and mobile checkups for patients who require medical attention but cannot visit the hospital.",
    },
    {
      id: 9,
      image: "../../Images/protection.png",
      name: "Critical Care",
      icon: "icon-intensive-care",
      desc: "Our intensive care unit (ICU) offers life-saving treatments for patients with severe or life-threatening medical conditions.",
    },
  ];
  
  

const ServiceCard = () => {
  return (
    <div className="container2 mt-4">
      <div className="mt-4">

        <div className="services-contents grid1 my-5">
          {services.map((item, index) => (
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

export default ServiceCard;
