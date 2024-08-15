// import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
  useHistory,
} from "react-router-dom";

import Header from "./header.js";
import Personal_info from "./P_info.js";
import Footer from "./footer.js";
import Plan from "./plan.js";
import AddOn from "./addon.js";
import { useState } from "react";


function App() {
const [addOnFormValues,setAddonFormValues] = useState({})
const [planFormValues,setPlanFormValues] = useState({})


  const handleAddOnFormSubmit = (finalFormValues) => {
  };

  const handlePlanFormSubmit = (finalFormValues) => {
    const formValues = { ...finalFormValues };
  };


  return (
    <Router>
      <div className=" bg-gray-100 w-full h-dvh m-0 p-0 relative flex flex-col items-center">
        <Header></Header>
        <Routes>
          <Route path="/personal_info" element={<Personal_info />} />
          <Route path="/plan" element={<Plan handlePlanFormSubmit={handleAddOnFormSubmit}/>} />
          <Route path="/addon" element={<AddOn handleAddonFormSubmit={handlePlanFormSubmit}/>} />
          <Route path="/" element={<Personal_info />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
