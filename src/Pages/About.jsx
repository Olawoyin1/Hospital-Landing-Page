import React from "react";
import Intro from "../Components/Intro";
import { IoPlayOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import Card from "../Components/Card";
import FAQ from "../Components/FAQ";
import PageIntro from "../Components/PageIntro";

const About = () => {
  const aboutParagraph = `At Modern Clinic, we provide advanced medical care tailored to your unique needs. With a team of skilled professionals and cutting-edge technology, we ensure high-quality treatment in a compassionate environment. \n\nYour health is our priority, and we are committed to delivering personalized care that promotes healing and well-being. Whether it's preventive screenings or specialized treatments, we are here to support you every step of the way.`;
  return (
    <div className="">
        
      <div className="container2">

        <div className="d-flex flex-column flex-md-row align-items-center gap-3 ">
          <div className="p-5 col col-md-5">
            <div className="intro-img">
              <div className="intro-card">
                <img src="../../Images/1.jpg" alt="" />
              </div>
              <div className="intro-bg first"></div>
            </div>
          </div>
          <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
            <div className="d-flex flex-column">
              <h1>Welcome To</h1>
              <h1 className="fw-bold">Modern Clinic.</h1>
            </div>
            <p className="muted" style={{ whiteSpace: "pre-wrap" }}>
              {aboutParagraph}
            </p>
            <div className="d-flex align-items-center gap-3">
              <button className="btn-play">
                <FaPlay />
              </button>
              <small className="color">Whatch Video About Us</small>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column-reverse flex-md-row align-items-center gap-3 ">
          <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
            <div className="d-flex flex-column">
              <h2 className="fw-bold">Who We Are.</h2>
            </div>
            <p className="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              corporis similique aliquid, ipsam voluptatibus velit eligendi eius
              nihil sunt. Tenetur dignissimos deserunt sapiente illo quis culpa
              provident nobis nemo modi.
            </p>
            <div className="d-flex align-items-center gap-3">
              <button className="btn-play">
                <FaPlay />
              </button>
              <small className="color">Whatch Video About Us</small>
            </div>
          </div>
          <div className="p-5 col col-md-5">
            <div className="intro-img">
              <div className="intro-card">
                <img src="../../Images/2.jpg" alt="" />
              </div>
              <div className="intro-bg sec"></div>
            </div>
          </div>
        </div>

        <div className="d-flex mb-4 flex-column flex-md-row align-items-center gap-3 ">
          <div className="p-5 col col-md-5">
            <div className="intro-img">
              <div className="intro-card">
                <img src="../../Images/7.jpg" alt="" />
              </div>
              <div className="intro-bg first"></div>
            </div>
          </div>
          <div className="intro-content d-flex flex-column  align-items-start justify-content-center gap-3">
            <div className="d-flex flex-column">
              <h2 className="fw-bold">Why Patience Choose Us</h2>
            </div>
            <p className="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              corporis similique aliquid, ipsam voluptatibus velit eligendi eius
              nihil sunt. Tenetur dignissimos deserunt sapiente illo quis culpa
              provident nobis nemo modi.
            </p>
            {/* <button className='main-btn d-inline-block'><span>More About Us</span></button> */}
            <div className="d-flex align-items-center gap-3">
              <button className="btn-play">
                <FaPlay />
              </button>
              <small className="color">Whatch Video About Us</small>
            </div>
          </div>
        </div>
      </div>

      <Card />
      <FAQ />
    </div>
  );
};

export default About;
