import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

import { isAuthenticated, logOut } from "../data/authentication";

const MainLayout = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setAllEvents(storedEvents);
  }, []);

  return (
    <div className="bg-[#1E1E1E] flex flex-col min-h-screen bg-diagonal">
      <Navbar />
      <main className="flex-grow flex flex-col justify-between py-4 px-24 text-[#F5F5F5] text-lg">
        {authenticated ? (
          <div>
            <p>Welcome back!</p>
            <button
              onClick={() => {
                logOut();
                setAuthenticated(false);
              }}
            >
              Log Out
            </button>
          </div>
        ) : (
          <p>Please sign in.</p>
        )}
        <Outlet context={{ allEvents, setAllEvents, authenticated }} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
