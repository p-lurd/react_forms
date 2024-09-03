import Sidebar from "./Sidebar.js";
import Navigator from "./NavigatorMd.js";
import { useFormContext } from "./FormContext.js";
import { motion } from "framer-motion";
const Summary = () => {
  const { optionPlan, setOptionPlan, selectedPlan, setSelectedPlan } =
    useFormContext();
  return (
    <motion.div
     className="absolute bg-white rounded-lg top-32 p-5 mx-4 shadow-lg md:flex md:p-2 text-gray-400"
     initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
     >
      <Sidebar></Sidebar>
      <div className="md:mx-10">
      <div className="md:m-3">
        <h1 className="mt-4 mb-2 text-2xl text-blue-900 font-semibold font-mono">
          Finishing up
        </h1>
        <p className="text-gray-400 mb-5">
          Duoble-check everything looks OK before confirming.
        </p>
      </div>
      <div className="bg-slate-50 rounded-lg mb-5 px-3">
        <div className="flex justify-between p-5 pb-4">
          <div>
            <h2 className="text-blue-900 font-bold">{selectedPlan}({optionPlan})</h2>
            <a href="" className="underline">
              Change
            </a>
          </div>
          <p className="text-blue-900 font-semibold">$9/mo</p>
        </div>
        <hr/>
        <div className="flex justify-between p-5 pb-0">
          <h2>Online service</h2>

          <p className="text-blue-950">$9/mo</p>
        </div>
        <div className="flex justify-between p-5 pb-5">
          <h2>Larger storage</h2>

          <p className="text-blue-950">$5/mo</p>
        </div>
      </div>
      <div className="flex justify-between p-5">
        <h2>Total(per month)</h2>
        <p className="text-blue-900 font-bold">+$12/mo</p>
      </div>
      <Navigator></Navigator>
      </div>
    </motion.div>
  );
};

export default Summary;
