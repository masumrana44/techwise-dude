import React from "react";
import "./Navbar.css";
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
// import img10 from "../../assets/bg-img-10.web";

const Navbar = () => {
    const sliderImgs = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9
       
    ];
  return (
    <header className="header-container">
      <div className="banner">
        <div className="slider">
          {/* <img src={img1} id="slideImg" alt="" /> */}
          {
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              Pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {sliderImgs.map((img) => (
                <SwiperSlide >
                  <img src={img} id="slideImg"   alt=''   />
                </SwiperSlide>
              ))}
            </Swiper>
          }
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
              <Link to="#">Courses</Link>
              <Link to="#">Support</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Contact</Link>
            </nav>
          </div>
          <div className="content">
            <h1>LET'S START TO DESIGN</h1>
            <h3>
              If you want to change your life.Then you get Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Aliquid, excepturi.
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
