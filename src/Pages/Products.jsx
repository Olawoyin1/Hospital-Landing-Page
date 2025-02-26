import React from "react";
import { motion } from "framer-motion";

const Product = () => {
    const products = [
        {
          "name": "Paracetamol",
          "image": "../../images/d.webp",
          "description": "Pain reliever and fever reducer commonly used for headaches and muscle aches."
        },
        {
          "name": "Ibuprofen",
          "image": "../../images/d1.webp",
          "description": "Non-steroidal anti-inflammatory drug (NSAID) used for pain, fever, and inflammation."
        },
        {
          "name": "Vitamin C",
          "image": "../../images/d2.webp",
          "description": "Boosts immune system health and supports collagen production."
        },
        {
          "name": "Amoxicillin",
          "image": "/images/amoxicillin.jpg",
          "description": "Broad-spectrum antibiotic used to treat bacterial infections."
        },
        {
          "name": "Loratadine",
          "image": "/images/loratadine.jpg",
          "description": "Antihistamine for allergy relief, treating sneezing, itching, and runny nose."
        },
        {
          "name": "Cough Syrup",
          "image": "/images/cough-syrup.jpg",
          "description": "Helps relieve cough and soothe throat irritation."
        },
        {
          "name": "Aspirin",
          "image": "/images/aspirin.jpg",
          "description": "Pain reliever, fever reducer, and anti-inflammatory medicine."
        },
        {
          "name": "Multivitamins",
          "image": "/images/multivitamins.jpg",
          "description": "Essential nutrients to support general health and well-being."
        },
        {
          "name": "Calcium Supplements",
          "image": "/images/calcium.jpg",
          "description": "Supports bone health and prevents osteoporosis."
        },
        {
          "name": "Fish Oil",
          "image": "/images/fish-oil.jpg",
          "description": "Rich in omega-3 fatty acids, supports heart and brain health."
        },
        {
          "name": "Omeprazole",
          "image": "/images/omeprazole.jpg",
          "description": "Reduces stomach acid, used to treat acid reflux and ulcers."
        },
        {
          "name": "Melatonin",
          "image": "/images/melatonin.jpg",
          "description": "Natural sleep aid that helps regulate sleep cycles."
        },
        {
          "name": "Probiotics",
          "image": "/images/probiotics.jpg",
          "description": "Supports gut health and improves digestion."
        },
        {
          "name": "Glucosamine",
          "image": "/images/glucosamine.jpg",
          "description": "Used for joint support and arthritis relief."
        },
        {
          "name": "Folic Acid",
          "image": "/images/folic-acid.jpg",
          "description": "Essential for pregnancy and red blood cell formation."
        }
      ]
      
  return (
    <div className="mm">
    <div className="container2  py-4 my-5">
      {/* Hero Section */}
      <div className="text-center v-cover d-flex align-items-center justify-content-center mb-4 flex-column text-white p-5 gap-3 rounded" style={{backgroundImage : `url('../../Images/med.jpg')`}}>
        <h1 className="text-4xl font-bold">Quality Medications & Supplements</h1>
        <p className="mt-2 text-lg">Your Health, Our Priority</p>
      </div>

      {/* Product List */}
      <div className="mt-5 p-0">
        <h2 className="fw-bold mb-4 text-center">Our Products</h2>

        <motion.div
          className="f-grid gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >

            {products.map((product, index) => (
              <div key={index} className="">
                <div className="client rounded overflow-hidden">
                  <img
                    // src={product.image}
                    src="../../Images/d2.webp"
                    className="card-img-top"
                    alt={product.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="card-body p-3 d-flex flex-column align-items-start gap-2">
                    <h6 className="fw-bold">{product.name}</h6>
                    <small className="muted mt-1">{product.description}</small>
                  </div>
                </div>
              </div>
            ))}

        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Product;
