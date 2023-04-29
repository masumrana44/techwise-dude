import React from "react";
import "./CoursesCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoursesCard = ({ card }) => {
  const { _id, coursePhoto, anoPhoto, Description, title, workshop, price } =
    card;
  return (
    <div className="card">
      <img src={coursePhoto} alt="" />
      <div className="card-text-conent">
        <h3 className="title">{title}</h3>
        <h2 className="price">${price}</h2>
        <Link className="read-more" to={`/course/dettails/${_id}`}>
          {" "}
         
            <h5>READ MORE</h5>
            <FaLongArrowAltRight />
           
        </Link>
      </div>
    </div>
  );
};

export default CoursesCard;
