import "./Cards.css";
import Card from "./Card";
import NoDataFound from "./NoDataFound";
import { useState, useEffect } from "react";

const Cards = ({ courses, category }) => {
  const [courseIndicator, setCourseIndicator] = useState(false);

  useEffect(() => {
    if (!courses || Object.keys(courses).length === 0) {
      setCourseIndicator(true);
    } else {
      setCourseIndicator(false);
    }
  }, [courses]);

  let allCourses = [];

  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };
  return (
    <div className="cards-container">
      <div className="cards-wrapper">
        {courseIndicator ? (
          <NoDataFound>No Data Found...</NoDataFound>
        ) : (
          getCourses().map((course) => {
            return <Card key={course.id} course={course} />;
          })
        )}
      </div>
    </div>
  );
};

export default Cards;
