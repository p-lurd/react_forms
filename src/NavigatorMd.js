import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useNavigate,useLocation } from 'react-router-dom';

//desktop navigator
const Navigator = () => {
    const Navigate = useNavigate()
    const location = useLocation();

  const routes = ["/personal_info", "/plan", "/addon", "/summary"];

  const getCurrentRouteIndex = () => routes.indexOf(location.pathname);

  const getNextPath = () => {
    const currentIndex = getCurrentRouteIndex();
    return currentIndex < routes.length - 1 ? routes[currentIndex + 1] : "/";
  };

  const getPreviousPath = () => {
    const currentIndex = getCurrentRouteIndex();
    return currentIndex > 0 ? routes[currentIndex - 1] : null;
  };
  
  const next = getNextPath();
  const prev = getPreviousPath();
  console.log(location)
    return ( 
        <div className="md:relative fixed flex justify-between bg-white bottom-0 left-0 w-full pt-5 mt-5 ">
            <Link className={`m-3 p-2 text-gray-400 ${location.pathname === '/personal_info' ? 'hidden' : 'block'}`} to={prev}>Go Back</Link>
            <Link className="block m-3 p-2 text-white bg-blue-900 rounded-md" to={next}>Next Step</Link>

        </div>
     );
}
 
export default Navigator;