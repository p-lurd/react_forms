import arcade from "./assets/arcade.svg";
import advanced from "./assets/advanced.svg";
import pro from "./assets/pro.svg";
import { useFormContext } from "./FormContext.js";
import Sidebar from "./Sidebar.js";
import Navigator from "./NavigatorMd.js";
import{motion} from "framer-motion"

const Plan = () => {
  
  const { optionPlan, setOptionPlan, selectedPlan, setSelectedPlan, name, email } =
    useFormContext();
  // const [optionPlan, setOptionPlan] = useState("yearly");
  // const [selectedPlan, setSelectedPlan] = useState(null);
  console.log(name, email)

  const handleToggle = (event) => {
    if (event.target.checked) {
      setOptionPlan("monthly");
    } else {
      setOptionPlan("yearly");
    }
    // setOptionPlan(event.target.checked)
  };

  const plans = {
    Arcade: {
      monthly: 9,
      yearly: 90,
    },
    Advanced: {
      monthly: 12,
      yearly: 120,
    },
    Pro: {
      monthly: 15,
      yearly: 150,
    },
  };

  // const finalFormValues = {
  //   optionPlan,
  //   selectedPlan,
  // };

  // useEffect(()=>{handlePlanFormSubmit(finalFormValues)},[finalFormValues])

  return (
    <motion.div
     className="absolute bg-white rounded-lg top-32 p-5 mx-4 shadow-lg md:flex md:p-2"
     initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
     >
      <Sidebar></Sidebar>
      <div className="md:mx-5">
        <div>
          <h1 className="mt-4 mb-2 text-2xl text-blue-900 font-semibold font-mono">
            Select your plan
          </h1>
          <p className="text-gray-400 ">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div>
          <div className="md:flex ">
            <div
              key="Arcade"
              onClick={() => setSelectedPlan("Arcade")}
              className={`p-4 flex border rounded-lg mb-4 mt-6 cursor-pointer text-blue-900 md:flex-col md:mr-10 ${
                selectedPlan === "Arcade"
                  ? "border-blue-900 bg-gray-100 shadow-lg"
                  : "border-gray-300 bg-white"
              }`}
            >
              <img src={arcade} alt="A" className="pr-2 md:w-10" />
              <div>
                <h3 className="text-lg font-semibold">Arcade</h3>
                <h3 className="text-gray-400">
                  ${plans.Arcade[optionPlan]}
                  {optionPlan === "yearly" ? "/yr" : "/mo"}
                </h3>
                {optionPlan === "yearly" ? (
                  <p className="text-sm">2 months free</p>
                ) : null}
              </div>
            </div>
            <div
              key="Advanced"
              onClick={() => setSelectedPlan("Advanced")}
              className={`p-4 flex border rounded-lg mb-4 mt-6 cursor-pointer text-blue-900 md:flex-col md:mr-10  ${
                selectedPlan === "Advanced"
                  ? "border-blue-900 bg-gray-100 shadow-lg"
                  : "border-gray-300 bg-white"
              }`}
            >
              <img src={advanced} alt="A" className="pr-2 md:w-10" />
              <div>
                <h3 className="text-lg font-semibold">Advanced</h3>
                <h3 className="text-gray-400">
                  ${plans.Advanced[optionPlan]}
                  {optionPlan === "yearly" ? "/yr" : "/mo"}
                </h3>
                {optionPlan === "yearly" ? (
                  <p className="text-sm">2 months free</p>
                ) : null}
              </div>
            </div>

            <div
              key="Pro"
              onClick={() => setSelectedPlan("Pro")}
              className={`p-4 flex border rounded-lg mb-4 mt-6 cursor-pointer text-blue-900 md:flex-col md:mr-10 md:p-5 ${
                selectedPlan === "Pro"
                  ? "border-blue-900 bg-gray-100 shadow-lg"
                  : "border-gray-300 bg-white"
              }`}
            >
              <img src={pro} alt="A" className="pr-2 md:w-10" />
              <div>
                <h3 className="text-lg font-semibold">Pro</h3>
                <h3 className="text-gray-400">
                  ${plans.Pro[optionPlan]}
                  {optionPlan === "yearly" ? "/yr" : "/mo"}
                </h3>
                {optionPlan === "yearly" ? (
                  <p className="text-sm ">2 months free</p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-10 mb-3">
            <label class="inline-flex w-4/5 items-center cursor-pointer justify-center bg-slate-100 p-3 rounded-xl">
              <span class=" text-sm mr-3 font-medium text-blue-900 dark:text-gray-500">
                Yearly
              </span>
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                enabled
                onChange={handleToggle}
              />
              <div class="relative w-11 h-6 bg-blue-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
                Monthly
              </span>
            </label>
          </div>
        </div>
        <Navigator></Navigator>
      </div>
      
    </motion.div>
  );
};

export default Plan;
