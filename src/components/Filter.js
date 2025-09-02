// import React from "react";
import "./Filter.css";

const Filter = ({ filterData, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };
  return (
    <div className="filter-container">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            className={category === data.title ? "active" : ""}
            onClick={() => filterHandler(data.title)}
          > 
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
