import "./App.css";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
// import { useState } from "react";
import { apiUrl, filterData } from "./Data";
import { useEffect, useState } from "react";
imponp rt { ToastContainer, toast } from "react-toastify";

// import CheckIconsNToast from "./components/CheckIconsNToast";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(output);
        setCourses(output.data);
        // console.log(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="">
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
      {/* <CheckIconsNToast/> */}
    </div>
  );
}

export default App;
