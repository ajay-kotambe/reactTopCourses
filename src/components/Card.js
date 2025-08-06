import "./Card.css";
import { FcLike } from "react-icons/fc";

const Card = ({ course }) => {
  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.image.alt} />
        <div>
          <button>
            <FcLike />
          </button>
        </div>
        <div>
          <p>{course.title}</p>
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
