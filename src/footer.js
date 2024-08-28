//...........................this is not used anymore
// ............................check navigator for handling


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useNavigate } from 'react-router-dom';


// mobile footer
const Footer = ({prev, next}) => {
    const navigate = useNavigate();
    console.log("mobile footer", next, prev)
    return ( 
        <div className="flex justify-between bg-white absolute bottom-0 w-full md:hidden">
            <Link className="block m-3 p-2 text-gray-400" to={prev}>Go Back</Link>
            <Link className="block m-3 p-2 text-white bg-blue-900 rounded-md" to={next}>Next Step</Link>

        </div>
     );
}
 
export default Footer;