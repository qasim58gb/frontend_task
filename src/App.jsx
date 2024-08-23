import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar/Sidebar";

import Navbar from "./component/Navbar/Navbar";

import FormDetails from "./page/FormSection/FormDetails";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div className="flex w-[100%] font-rubik">
        <div
          className={`${
            isCollapsed
              ? "w-[15%] sm:w-[15%] md:w-[10%] lg:w-[10%]" // When collapsed
              : "w-[40%] sm:w-[25%] md:w-[20%] lg:w-[20%]" // When expanded
          }`}
        >
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>
        <div
          className={`${
            isCollapsed
              ? "w-[85%] sm:w-[85%] md:w-[90%] lg:w-[90%]" // When collapsed
              : "w-[60%] sm:w-[75%] md:w-[80%] lg:w-[80%]" // When expanded
          }`}
        >
          <Navbar toggleCollapse={toggleCollapse} />
          <Routes>
            <Route path="/" element={<FormDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
