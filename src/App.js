import "./App.css";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Loader";

import { apiUrl, filterData } from "./Data";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import CheckIconsNToast from "./components/CheckIconsNToast";

function App() {
  const [courses, setCourses] = useState(null);// useState([]) can use this if u don't have loader component
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // console.log(output);
      setCourses(output.data);
      // console.log(output.data);
    } catch (error) {
      toast.error("Something went wrong");
      <ToastContainer />;
      console.log("Something went wrong");
    }
    setLoading(false);
  };
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
      {/* <CheckIconsNToast/> */}
      {/* Required continer to show the toast */}
      <ToastContainer />
    </div>
  );
}

export default App;
