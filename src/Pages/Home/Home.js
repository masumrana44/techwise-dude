import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
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
import { toast } from "react-hot-toast";
import CountUpComp from "react-countup";

const Home = () => {
  const sliderImgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [couses, setCourses] = useState([]);
  const [counterOn, setCounter] = useState(false);
  const { loading, setLoading, user, Logouting } = useContext(ShareContext);
  const handleLogouting = () => {
    return Logouting().then(() => toast.success("Logout Successfully done"));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/courses/?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        if (data) {
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
                <a href="#courses">Courses</a>
                <Link to="#">Support</Link>
                <Link to="#">Blog</Link>
                {user?.email ? (
                  <button className="log-btn" onClick={handleLogouting}>
                    <Link to="">LogOut</Link>
                  </button>
                ) : (
                  <button className="log-btn">
                    {" "}
                    <Link to="/login">Login</Link>
                  </button>
                )}
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
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="home-courses">
            {couses.map((cous) => (
              <CoursesCard key={cous?._id} card={cous}></CoursesCard>
            ))}
          </div>
        )}
        <Link to="/courses">
          <button className="btn-view-courses">VIEW ALL COURSES</button>
        </Link>
      </section>

      <section className="home-second-section">
        <div className="home-second-section-img">
          <img src={img8} alt="" />
        </div>
        <div className="home-second-section-text">
          
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            <div className="impact-card">
              <div>
                <h3>
                  {counterOn && (
                    <CountUp start={500} end={4000} duration={2.5} />
                  )}
                  +
                </h3>
                <p>Job placement worldwide</p>
              </div>

              <div className="middle-counter">
                <h3>
                  {counterOn && (
                    <CountUp start={300} end={1000} duration={2.5} />
                  )}
                  +
                </h3>
                <p> Connected companies</p>
              </div>
              <div>
                <h3>
                  {counterOn && <CountUp start={17} end={100} duration={2.5} />}
                  +
                </h3>
                <p>Dedicated Job Placement Executives</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  );
};

export default Home;
