// import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
  useHistory,
} from "react-router-dom";
import Layout from "./Layout";
import { FormProvider } from "./FormContext";

function App() {
  // const location = useLocation();

  // const routes = [
  //   '/',
  //   '/plan',
  //   '/addon',
  //   '/summary'
  // ];
  // const getCurrentRouteIndex = () => routes.indexOf(location.pathname);

  // const getNextPath = () => {
  //   const currentIndex = getCurrentRouteIndex();
  //   return currentIndex < routes.length - 1 ? routes[currentIndex + 1] : '/';
  // };

  // const getPreviousPath = () => {
  //   const currentIndex = getCurrentRouteIndex();
  //   return currentIndex > 0 ? routes[currentIndex - 1] : null;
  // };
  return (
    <Router>
      <FormProvider>
        <Layout></Layout>
      </FormProvider>
    </Router>
  );
}

export default App;
