import Sidebar from "./Sidebar.js";
import Navigator from "./NavigatorMd.js";
import { useFormContext } from "./formContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
  useHistory,
} from "react-router-dom";
import { motion } from 'framer-motion';

const Personal_info = () => {
  const { name, setName, phone, setPhone, email, setEmail } = useFormContext();
  
  return (
    <motion.form
      action=""
      className="absolute bg-white rounded-lg top-32 p-5 mx-4 shadow-lg md:flex md:p-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar></Sidebar>
      <div className="md:m-3">
        <h1 className="mt-4 mb-2 text-2xl text-blue-900 font-semibold font-mono">
          Personal info
        </h1>
        <p className="text-gray-400 ">
          Please provide your name, email, address, and phone number.
        </p>
        <div className="mt-5">
          <label htmlFor="name" className="mb-1 block text-sm text-blue-900">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="mb-1 block text-sm text-blue-900">
            Email Address
          </label>
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="e.g. stephenking@lorem.com focus:"
          />
        </div>

        <div className="mt-5 mb-5">
          <label htmlFor="phone" className="mb-1 block text-sm text-blue-900">
            Phone Number
          </label>
          <input
          value={phone}
          onChange={(e)=> setPhone(e.target.value)}
            type="tel"
            id="phone"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="e.g. +1 234 567890"
          />
        </div>
        <Navigator/>
      </div>
    </motion.form>
  );
};

export default Personal_info;
