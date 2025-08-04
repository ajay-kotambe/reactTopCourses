import "./App.css";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
// import { useState } from "react";
import { apiUrl, filterData } from "./Data";
// import CheckIconsNToast from "./components/CheckIconsNToast";

function App() {


  return (
    <div className="">
      <Navbar />
      <Filter filterData={filterData} />
      <Cards />
      {/* <CheckIconsNToast/> */}
    </div>
  );
}

export default App;
