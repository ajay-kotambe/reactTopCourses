import { useState } from "react";
import "./Card.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course }) => {
  const [isLiked, setIsLiked] = useState(false);
  const onClickHandler = () => {
    const newState = !isLiked;
    setIsLiked(newState);
    if (!newState) {
      toast.success("Content liked!");
    } else {
      toast.warn("Content disliked!");
    }
  };

  return (
    <div className="card">
      <div>
        <img src={course.image.url} alt={course.image.alt} />
        <div>
          <button className="like-icon" onClick={onClickHandler}>
            {isLiked ? <FcLike /> : <FcLikePlaceholder />}
          </button>
        </div>
        <div className="card-content">
          <h3>{course.title}</h3>
          {/* <p>{course.description.length>100 ? course.description.substr(0,100):course.description }</p> */}
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
