// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import SignUp from "./pages/SignUp";
import EventDetails from "./pages/EventDetails"; // Correct import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<AuthPage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="events/:eventId" element={<EventDetails />} />{" "}
          {/* FIXED */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
