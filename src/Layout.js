import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
    Link,
    Navigate
  } from "react-router-dom";
import Header from "./header.js";
import Personal_info from "./P_info.js";
import Footer from "./footer.js";
import Plan from "./plan.js";
import AddOn from "./addon.js";
import { FormProvider } from "./formContext";
import Summary from "./Summary.js";
const Layout = () => {
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
  console.log("locations mobile", next, prev);

  return (
    <div className="bg-gray-100 w-full h-dvh m-0 p-0 relative flex flex-col items-center">
      <Header />

      <Routes>
      <Route path="/" element={<Navigate to="/personal_info" />} />
      {/* <Route index element={<Personal_info />} /> */}
        <Route path="/personal_info" element={<Personal_info />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/addon" element={<AddOn />} />
        <Route path="/summary" element={<Summary />} />
        {/* <Route path="/" element={<Personal_info />} /> */}
      </Routes>

      {/* <Footer next={next} prev={prev} /> */}
    </div>
  );
};

export default Layout;
