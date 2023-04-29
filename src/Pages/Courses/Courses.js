import React, { useContext, useState } from "react";
import "./Courses.css";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "./CoursesCard";
import { ShareContext } from "../../Contexts/Context";

const Courses = () => {
  const { loading, setLoading } = useContext(ShareContext);
  console.log(loading);
  const courses = useLoaderData();
  if (courses) {
    setLoading(false);
  }
  console.log(courses);
  return (
    <div>
      {loading ? (
        <div class="spinner"></div>
      ) : (
        <div className="courses-container">
          {courses.map((course) => (
            <CoursesCard card={course} key={course?._id}></CoursesCard>
          ))}
        </div>
      )}

    </div>
  );
};

export default Courses;
