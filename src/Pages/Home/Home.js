import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import logo from "../../assets/logo.png";
import img1 from "../../assets/bg-img-1.avif";
import img2 from "../../assets/bg-img-2.avif";
import img3 from "../../assets/bg-img-3.avif";
import img4 from "../../assets/bg-img-4.avif";
import img5 from "../../assets/bg-img-5.avif";
import img6 from "../../assets/bg-img-6.webp";
import img7 from "../../assets/bg-img-7.webp";
import img8 from "../../assets/bg-img-8.jpeg";
import img9 from "../../assets/bg-img-9.jpeg";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { useEffect } from "react";
import CoursesCard from "../Courses/CoursesCard";
import { ShareContext } from "../../Contexts/Context";

const Home = () => {
  const sliderImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [couses, setCourses] = useState([]);
  const {loading,setLoading}=useContext(ShareContext);
  useEffect(() => {
    fetch(`http://localhost:5000/courses/?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        if(data){
          setLoading(false);
        }
      });
  }, []);
  return (
    <div>
      {/* Home header  */}
      <header className="header-container" id="">
        <div className="banner">
          <div className="slider">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {sliderImgs.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} id="slideImg" alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="overlay">
            <div className="navbar">
              <div className="logo">
                <img src={logo} alt="" />
                <h1>
                  <span id="logo-first">techwise</span>dude
                </h1>
              </div>
              <nav>
                <Link to="#">Home</Link>
                <a href="#courses">Courses</a>
                <Link to="#">Support</Link>
                <Link to="#">Blog</Link>
              </nav>
            </div>
            <div className="content">
              <h3 className="animation-title">WELCOME TO TECHWISE DUDE</h3>
              <h3 className="animation-text">
                <TypeAnimation
                  sequence={[
                    // Same String at the start will only be typed once, initially
                    "Change your life I provide Courses",
                    1000,
                    "Change your life I provide Training",
                    1000,
                    "Creative Coaching I provide Courses",
                    1000,
                    "Creative Coaching I provide  Training",
                    1000,
                    "Let's Create your Career!!",
                    1000,
                    "Let's create something amazing.!!",
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </h3>
            </div>
          </div>
        </div>
      </header>

      {/* Courses section  */}
      <section className="home-courses-container" id="courses">
        <h1>Push Your Life To a New Level _</h1>
        <div className="divider"></div>

        <p>
          pushing your life to a new level also requires cultivating a growth
          mindset and developing positive habits that support your goals. Let's
          change your life{" "}
        </p>
         {
          loading?<div className="spinner"></div>:  <div className="home-courses">
          {couses.map((cous) => (
            <CoursesCard key={cous?._id} card={cous}></CoursesCard>
          ))}
        </div>
         }
        <Link to='/courses'><button  className="btn-view-courses" >VIEW ALL COURSES</button></Link>
      </section>
    </div>
  );
};

export default Home;
