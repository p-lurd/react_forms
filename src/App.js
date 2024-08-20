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
import { FormProvider } from "./formContext";
import Summary from "./Summary.js";

function App() {
  return (
    <Router>
      <FormProvider>
        <div className=" bg-gray-100 w-full h-dvh m-0 p-0 relative flex flex-col items-center">
          <Header></Header>
          
          <Routes>
            <Route path="/personal_info" element={<Personal_info />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/addon" element={<AddOn />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/" element={<Personal_info />} />
          </Routes>

          <Footer></Footer>
        </div>
      </FormProvider>
    </Router>
  );
}

export default App;
