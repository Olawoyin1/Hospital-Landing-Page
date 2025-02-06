import React from "react";
import { LuHeartPulse } from "react-icons/lu";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    image: "../../Images/heart.png",
    name: "Hearth Surgery",
    icon: `<LuHeartPulse />`,
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 2,
    image: "../../Images/blood.png",
    name: "Blood Testing",
    icon: "icon-smartphone",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 3,
    image: "../../Images/dna.png",
    name: "DNA Testing",
    icon: "icon-smartphone",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 4,
    image: "../../Images/witness.png",
    name: "Eye Treatment",
    icon: "icon-smartphone",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 7,
    image: "../../Images/tooth.png",
    name: "Dental Care",
    icon: "icon-smartphone",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 8,
    image: "../../Images/ambulance.png",
    name: "Emergency Services",
    icon: "icon-smartphone",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 8,
    image: "../../Images/pills.png",
    name: "Pharmacy Services",
    icon: "icon-smartphone",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 8,
    image: "../../Images/stethoscope.png",
    name: "Outdoor Checkup",
    icon: "icon-smartphone",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    id: 8,
    image: "../../Images/protection.png",
    name: "Critical Care",
    icon: "icon-smartphone",
    desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
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
