import "./NoDataFound.css";

const NoDataFound = (props) => {
  return (
    <div className="noDataFound-container">
      <h1 className="">404 !</h1>
      <h3>{props.children}</h3>
    </div>
  );
};

export default NoDataFound;
