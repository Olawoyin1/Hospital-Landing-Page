import React from "react";
import { Link } from "react-router-dom";

const Vaccination = () => {
  const vaccines = [
    {
      name: "COVID-19 Vaccine",
      description:
        "Stay protected against COVID-19 with our latest vaccine doses.",
      image: "../../Images/new.jpg",
    },
    {
      name: "Flu Vaccine",
      description: "Prevent seasonal flu with a quick and effective flu shot.",
      image: "../../Images/flu.jpg",
    },
    {
      name: "Hepatitis B Vaccine",
      description:
        "Shield yourself from Hepatitis B with this essential vaccine.",
      image: "../../Images/hep.jpg",
    },
    {
      name: "HPV Vaccine",
      description:
        "Reduce the risk of HPV-related diseases with timely vaccination.",
      image: "../../Images/hpv.jpg",
    },
    {
      name: "Measles, Mumps & Rubella (MMR) Vaccine",
      description: "Protect yourself and your family from MMR infections.",
      image: "../../Images/muscle.jpg",
    },
    {
      name: "Tetanus, Diphtheria & Pertussis (Tdap) Vaccine",
      description: "A must-have vaccine for long-term protection.",
      image:"../../Images/tet.jpg",
    },
    {
      name: "Chickenpox (Varicella) Vaccine",
      description:
        "Prevent chickenpox and its complications with this safe vaccine.",
      image: "../../Images/new.jpg",
    },
    {
      name: "Pneumococcal Vaccine",
      description:
        "Helps prevent pneumonia and serious infections in children and adults.",
      image: "../../Images/new.jpg",
    },
    {
      name: "Shingles Vaccine",
      description:
        "Protect older adults from shingles and its painful effects.",
      image: "../../Images/new.jpg",
    },
    {
      name: "Typhoid Vaccine",
      description:
        "Essential for travelers to regions where typhoid fever is common.",
      image: "../../Images/new.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah O.",
      feedback:
        "The vaccination process was smooth, and the staff was incredibly helpful!",
    },
    {
      name: "James K.",
      feedback:
        "Booking was simple, and I felt safe throughout the entire process.",
    },
    {
      name: "Amina L.",
      feedback:
        "Highly recommended! Quick, efficient, and professional service.",
    },
    {
      name: "David W.",
      feedback:
        "I got my flu shot here last season, and it was quick and painless!",
    },
    {
      name: "Laura M.",
      feedback:
        "The online booking system is super easy. No waiting time at all!",
    },
    {
      name: "Samuel T.",
      feedback:
        "The pharmacist explained everything so well. I felt confident taking the vaccine.",
    },
    {
      name: "Fatima Z.",
      feedback:
        "Great customer service! The whole process took less than 15 minutes.",
    },
    {
      name: "Henry B.",
      feedback:
        "I love how professional and friendly the staff were. Highly recommend!",
    },
  ];

  return (
    <div className="vaccination">
      <div className="container2 py-4 my-5">
        {/* Hero Section */}
        <div className="text-center v-cover d-flex align-items-center justify-content-center flex-column text-white p-5 gap-3 rounded">
          <h1 className="fw-bold">Get Vaccinated, Stay Protected</h1>
          <p className="lead">
            Book your vaccination appointment in just a few clicks.
          </p>
          <Link to='/contact'>
            <button className="main-btn"><span>Book Now</span></button>
          </Link>
        </div>

        {/* Vaccines Offered */}
        <div className="mt-5">
          <h2 className="text-center fw-bolder mb-4">Our Vaccination Services</h2>
          <div className="grid1">
            {vaccines.map((vaccine, index) => (
              <div key={index} className="">
                <div className="client rounded overflow-hidden">
                  <img
                    src={vaccine.image}
                    className="card-img-top"
                    alt={vaccine.name}
                  />
                  <div className="card-body p-3 d-flex flex-column align-items-start gap-2">
                    <h6 className="fw-bold">{vaccine.name}</h6>
                    <small className="muted">{vaccine.description}</small>
                    <button className="bg-dark fw-light text-white btn-outline-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Testimonials Section */}
        <div className="mt-5">
          <h2 className="text-center fw-bolder mb-4">What Our Patients Say</h2>
          <div className="row m-0 p-0">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="client col-md-4 mb-3">
                <div className=" p-3 shadow-sm">
                  <p>"{testimonial.feedback}"</p>
                  <h6 className="fw-bold text-end">- {testimonial.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Vaccination;
