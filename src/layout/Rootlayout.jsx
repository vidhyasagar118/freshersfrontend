import { Outlet } from "react-router-dom";
import Navbar from "../contents/Navbar";
import Footer from "../Pages/Footer";
const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
            <Footer />
      
    </>
  );
};

export default Rootlayout;
