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
  const [courses, setCourses] = useState([]); // useState(null) can use this if u don't have loader component
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("All"); // useState(filterData[0].title)

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");

      console.log("Something went wrong");
    }

    setLoading(false);
  };
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
      {/* <CheckIconsNToast/> */}
      {/* Required continer to show the toast */}
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
