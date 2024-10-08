import { useEffect, useState } from "react";
import { useFormContext } from './formContext.js';
import Sidebar from "./Sidebar.js";
import Navigator from "./NavigatorMd.js";
import {motion} from "framer-motion"

const AddOn = ({ handleAddonFormSubmit }) => {
    const {customizableProfile, setCustomizableProfile, largerStorage, setLargerStorage, onlineService, setOnlineService}=useFormContext();
//   const [customizableProfile, setCustomizableProfile] = useState(false);
//   const [largerStorage, setLargerStorage] = useState(false);
//   const [onlineService, setOnlineService] = useState(false);

//   const [formValues, setFormValues] = useState({
//     customizableProfile: "",
//     largerStorage: "",
//     onlineService: "",
//   });

    //.......................this should be on clicking of summarize
    const pricing = {
        onlineService: 1,
        largerStorage: 2,
        customizableProfile: 2
    }
    const Total = ([customizableProfile, largerStorage, onlineService])=>{
        let val = 0
        this.array.forEach(element => {
            if(element){
                let val = val + pricing.element
            }
            return val
        });
    }

  const handleCheckboxChange = (event, setter) => {
    setter(event.target.checked);
  };

  return (
    <motion.div
     className="absolute bg-white rounded-lg top-32 p-5 mx-4 shadow-lg md:flex md:p-2"
     initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
     >
        <Sidebar></Sidebar>
        <div className="md:m-3">
      <h1 className="mt-4 mb-2 text-2xl text-blue-900 font-semibold font-mono">
        Pick add-ons
      </h1>
      <p className="text-gray-400 ">
        Add-ons help enhance your gaming experience.
      </p>
      <form action="">
        <label
          className={`flex justify-between items-center border p-3 rounded-md hover:bg-blue-50  mt-5 ${
            onlineService === true
              ? "border-blue-900 shadow-md bg-blue-50"
              : "border-gray-100"
          }`}
        >
          <div className="inline-flex items-center">
            <input
              onChange={(event) =>
                handleCheckboxChange(event, setOnlineService)
              }
              type="checkbox"
              value={onlineService}
              name="onlineService"
              class="w-4 h-4 checked:bg-blue-900 text-blue-600 bg-blue-900 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-blue-900 dark:border-blue-900"
            ></input>
            <div className="pl-5">
              <h1 className="text-blue-950 font-semibold">Online service</h1>
              <p className="text-xs text-gray-400">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <p className="text-sm text-blue-900">+$1/mo</p>
        </label>

        <label
          className={`flex justify-between items-center border p-3 rounded-md hover:bg-blue-50 mt-5  ${
            largerStorage === true
              ? "border-blue-900 shadow-md bg-blue-50"
              : "border-gray-100"
          }`}
        >
          <div className="inline-flex items-center">
            <input
              onChange={(event) =>
                handleCheckboxChange(event, setLargerStorage)
              }
              type="checkbox"
              value={largerStorage}
              name="largerStorage"
              class="w-4 h-4 checked:bg-blue-900 text-blue-600 bg-blue-900 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-blue-900 dark:border-blue-900"
            ></input>
            <div className="pl-5">
              <h1 className="text-blue-950 font-semibold">Larger storage</h1>
              <p className="text-xs text-gray-400">
                Extra 1TB of cloud storage
              </p>
            </div>
          </div>
          <p className="text-sm text-blue-900">+$2/mo</p>
        </label>

        <label
          className={`flex justify-between items-center border p-3 rounded-md hover:bg-blue-50 mt-5 ${
            customizableProfile === true
              ? "border-blue-900 shadow-md bg-blue-50"
              : "border-gray-100"
          } `}
        >
          <div className="inline-flex items-center">
            <input
              onChange={(event) =>
                handleCheckboxChange(event, setCustomizableProfile)
              }
              type="checkbox"
              value={customizableProfile}
              name="customizableProfile"
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-blue-900 dark:border-blue-900 checked:bg-blue-900 checked:border-blue-900 bg-red-600"
            ></input>
            <div className="pl-5">
              <h1 className="text-blue-950 font-semibold">
                Customizable profile
              </h1>
              <p className="text-xs text-gray-400">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <p className="text-sm text-blue-900">+$2/mo</p>
        </label>
      </form>
      <Navigator></Navigator>
      </div>

    </motion.div>
  );
};

export default AddOn;
