import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#1E1E1E] flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col justify-between py-4 px-24 text-[#F5F5F5] text-lg">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
