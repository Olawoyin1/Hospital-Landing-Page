import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    image: "../../Images/prescription.png",
    name: "Prescription Fulfillment",
    icon: `<LuClipboardCheck />`,
    desc: "We provide fast and accurate prescription fulfillment with expert pharmacist guidance.",
  },
  {
    id: 2,
    image: "../../Images/consultation.png",
    name: "Pharmacist Consultation",
    icon: `<LuUserCheck />`,
    desc: "Get professional advice on medication usage, side effects, and health concerns from our pharmacists.",
  },
  {
    id: 3,
    image: "../../Images/delivery.png",
    name: "Medication Home Delivery",
    icon: `<LuTruck />`,
    desc: "Enjoy doorstep delivery of your medications with our reliable and timely pharmacy delivery service.",
  },
  {
    id: 4,
    image: "../../Images/arrow.png",
    name: "Prescription Refills & Reminders",
    icon: `<LuAlarmCheck />`,
    desc: "Easily refill your prescriptions online and receive reminders so you never miss a dose.",
  },
  {
    id: 5,
    image: "../../Images/screening.png",
    name: "Health Screenings & Tests",
    icon: `<LuFlaskConical />`,
    desc: "We offer blood pressure monitoring, diabetes screening, cholesterol testing, and other essential health tests.",
  },
  {
    id: 6,
    image: "../../Images/pharmacist.png",
    name: "Over-the-Counter Medications",
    icon: `<LuShoppingBag />`,
    desc: "Find pain relievers, allergy medications, vitamins, and other non-prescription health products.",
  },
  {
    id: 7,
    image: "../../Images/vaccine.png",
    name: "Vaccinations & Immunizations",
    icon: `<LuShieldCheck />`,
    desc: "Protect yourself with flu shots, COVID-19 vaccines, and other essential immunizations available at our pharmacy.",
  },
  {
    id: 8,
    image: "../../Images/herbal.png",
    name: "Health & Wellness Products",
    icon: `<LuHeartPulse />`,
    desc: "Explore supplements, personal care items, weight management products, and wellness essentials.",
  },
  {
    id: 9,
    image: "../../Images/first-aid.png",
    name: "First Aid & Medical Supplies",
    icon: `<LuFirstAidKit />`,
    desc: "Find essential first aid kits, bandages, antiseptics, and emergency care products for home and travel use.",
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
