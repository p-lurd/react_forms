import Sidebar from "./Sidebar.js";
import Navigator from "./NavigatorMd.js";

const Personal_info = () => {
  return (
    <form
      action=""
      className="absolute bg-white rounded-lg top-32 p-5 mx-4 shadow-lg md:flex md:p-2"
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
            type="tel"
            id="phone"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="e.g. +1 234 567890"
          />
        </div>
        <Navigator></Navigator>
      </div>
    </form>
  );
};

export default Personal_info;
