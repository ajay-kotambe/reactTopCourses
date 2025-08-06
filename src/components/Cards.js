import "./Cards.css";
import Card from "./Card";

const Cards = ({ courses, category }) => {
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
        {getCourses().map((course) => {
          return <Card key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
