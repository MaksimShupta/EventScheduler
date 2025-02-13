import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

const MainLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const { email, password } = JSON.parse(storedUser);
      // Check if both email and password exist
      if (email && password) {
        setIsAuthenticated(true);
      }
    }
  }, []);
  return (
    <div className="bg-[#1E1E1E] flex flex-col min-h-screen bg-diagonal">
      <Navbar />
      <main className="flex-grow flex flex-col justify-between py-4 px-24 text-[#F5F5F5] text-lg">
        {isAuthenticated ? <p>Welcome back!</p> : <p>Please sign in.</p>}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
