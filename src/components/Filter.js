// import React from "react";
import "./Filter.css";

const Filter = ({ filterData }) => {
  return (
    <div className="filter-container">
      {filterData.map((data) => {
        return <button key={data.id}>{data.title} </button>;
      })}
    </div>
  );
};

export default Filter;
