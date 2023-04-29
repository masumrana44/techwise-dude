import React, { useContext } from "react";
import "./CourseDettails.css";
import { useLoaderData } from "react-router-dom";
import { ShareContext } from "../../Contexts/Context";

const CourseDettails = () => {
  const { loading, setLoading } = useContext(ShareContext);
  console.log(loading);
  const course = useLoaderData();
  if (course) {
    setLoading(false);
  }

  const {
    _id,
    title,
    coursePhoto,
    anoPhoto,
    price,
    description,
    workshop,
    requirement,
  } = course;

  return (
    <div>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div>
          <div className="course-dettails-container">
            <div className="intro-course-dettails">
              <img src={coursePhoto} alt="" />
              <div>
                <h1 className="title">{title}</h1>
                <h1 className="price">${price}</h1>
                <button>Enroll Now</button>
              </div>
            </div>
            <div className="course-description-container">
              <div className="description">
                <p>Description</p>
              </div>

              <div className="course-description">
                <h2 className="title">{title}</h2>

                <div className="course-workshop-container">
                  <h2>WorkShop Includes:</h2>
                  {workshop.map((wsp, id) => (
                    <li key={id}>{wsp}</li>
                  ))}
                </div>
                <div className="dettails-header">
                  <img src={anoPhoto} alt="" />
                </div>

                <div className="description-container">
                  <h2>Course Dettails:</h2>
                  {description.map((ds, id) => (
                    <p key={id}>{ds}</p>
                  ))}
                </div>
                <div className="requierment-container">
                  <h3>Prerequisites:</h3>
                  <p>{requirement}</p>
                </div>
              </div>
            </div>
            {/* <img src={coursePhoto} alt="" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDettails;
