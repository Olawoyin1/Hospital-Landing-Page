import React from "react";

const Test = () => {
  const labTests = [
    {
      category: "Blood Test",
      image: "../../images/bt.jpg",
      tests: [
        {
          name: "Complete Blood Count (CBC)",
          details: "Checks overall health and detects disorders.",
        },
        {
          name: "Blood Glucose Test",
          details: "Measures blood sugar levels for diabetes screening.",
        },
        {
          name: "Hemoglobin Test",
          details: "Detects anemia and blood oxygen levels.",
        },
        {
          name: "Iron Studies",
          details: "Assesses iron levels and potential deficiencies.",
        },
      ],
    },
    {
      category: "COVID-19 Testing",
      image: "../../images/covid.jpg",
      tests: [
        {
          name: "PCR Test",
          details: "Highly accurate test to detect active infection.",
        },
        {
          name: "Rapid Antigen Test",
          details: "Quick results for detecting COVID-19 antigens.",
        },
        {
          name: "Antibody Test",
          details: "Determines past infection and immunity.",
        },
      ],
    },
    {
      category: "Cholesterol & Heart Health",
      image: "../../images/col.jpg",
      tests: [
        {
          name: "Lipid Profile",
          details: "Measures cholesterol and triglyceride levels.",
        },
        {
          name: "HDL & LDL Cholesterol",
          details: "Checks good and bad cholesterol balance.",
        },
        {
          name: "Triglycerides Test",
          details: "Assesses fat levels linked to heart disease.",
        },
      ],
    },
    {
      category: "Diabetes Screening",
      image: "../../images/diabetes.jpg",
      tests: [
        {
          name: "Fasting Blood Sugar",
          details: "Measures glucose levels after fasting.",
        },
        {
          name: "HbA1c Test",
          details: "Shows average blood sugar over 2-3 months.",
        },
        {
          name: "Glucose Tolerance Test",
          details: "Evaluates body’s response to sugar intake.",
        },
      ],
    },
    {
      category: "Kidney Function Tests",
      image: "../../images/kidney.jpg",
      tests: [
        {
          name: "Creatinine Test",
          details: "Measures waste filtered by kidneys.",
        },
        {
          name: "Blood Urea Nitrogen (BUN)",
          details: "Assesses kidney health and function.",
        },
        {
          name: "Electrolyte Panel",
          details: "Checks sodium, potassium, and chloride levels.",
        },
      ],
    },
    {
      category: "Liver Function Tests",
      image: "../../images/liver.jpg",
      tests: [
        {
          name: "ALT & AST Test",
          details: "Detects liver damage or inflammation.",
        },
        {
          name: "Bilirubin Test",
          details: "Assesses liver function and bile levels.",
        },
        {
          name: "Albumin & Total Protein",
          details: "Measures protein levels in the blood.",
        },
      ],
    },
    {
      category: "Thyroid Function Tests",
      image: "../../images/thy.jpg",
      tests: [
        { name: "TSH Test", details: "Measures thyroid hormone levels." },
        {
          name: "T3 & T4 Tests",
          details: "Evaluates overall thyroid function.",
        },
        {
          name: "Thyroid Antibodies Test",
          details: "Detects autoimmune thyroid disorders.",
        },
      ],
    },
    {
      category: "STD Screening",
      image: "../../images/std.jpg",
      tests: [
        { name: "HIV Test", details: "Detects presence of HIV virus." },
        { name: "Syphilis Test", details: "Checks for syphilis infection." },
        {
          name: "Chlamydia & Gonorrhea Test",
          details: "Identifies common bacterial STDs.",
        },
      ],
    },
    {
      category: "Hormone Tests",
      image: "../../images/hormone.jpg",
      tests: [
        {
          name: "Testosterone Test",
          details: "Measures testosterone levels in the blood.",
        },
        {
          name: "Estrogen Test",
          details: "Evaluates estrogen balance for fertility and health.",
        },
        {
          name: "Cortisol Test",
          details: "Checks adrenal function and stress levels.",
        },
      ],
    },
    {
      category: "Allergy Testing",
      image: "../../images/allergy.jpg",
      tests: [
        {
          name: "Food Allergy Test",
          details: "Identifies allergic reactions to common foods.",
        },
        {
          name: "Pollen Allergy Test",
          details: "Detects sensitivity to seasonal pollen.",
        },
        {
          name: "Dust & Pet Dander Test",
          details: "Assesses reactions to common allergens.",
        },
      ],
    },
    {
      category: "Genetic Testing",
      image: "../../images/dna.jpg",
      tests: [
        {
          name: "Carrier Screening",
          details: "Identifies genetic disorders before pregnancy.",
        },
        {
          name: "Ancestry DNA Test",
          details: "Reveals ancestry and ethnic background.",
        },
        {
          name: "Pharmacogenomics Test",
          details: "Helps determine personalized medication response.",
        },
      ],
    },
  ];

  return (
    <div className="mm">
      <div className="container2 pt py-4 my-5">
        {/* Hero Section */}
        <div className="text-center v-cover d-flex align-items-center justify-content-center flex-column text-white p-5 gap-3 rounded">
          <h1 className="fw-bold">
            Reliable Laboratory Tests, Fast & Accurate Results
          </h1>
          <p className="lead">
            Book your lab test today for a healthier tomorrow.
          </p>
          <button className="btn-light btn-lg mt-3">Book a Test</button>
        </div>

        {/* Available Tests Section */}
        <div className="mt-5">
          <h2 className="text-center fw-bolder mb-4">
            Our Laboratory Test Services
          </h2>
          <div className="grid1 gap-4">
            {labTests.map((test, index) => (
              <div key={index} className="">
                <div className="client test-card rounded overflow-hidden">
                  <img
                    src={test.image}
                    className="card-img-top"
                    alt={test.name}
                  />
                  <div className="card-body p-3 d-flex flex-column align-items-start gap-2">
                    {/* Test Category Header */}
                    <h5 className="fw-bolder">{test.category}</h5>

                    {/* Sub-list of Tests */}
                    <ul className="mt-2 d-flex flex-column gap-3 p-0">
                      {test.tests.map((subTest, subIndex) => (
                        <li key={subIndex}>
                          <strong>{subTest.name}:</strong> <small className="muted">{subTest.details}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
