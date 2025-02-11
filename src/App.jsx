// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="sign-in" element={<AuthPage />} />
                    <Route path="sign-up" element={<SignUp />} />
                    {/* <Route path="your-events" element={<YourEvents />} />
          <Route path="events/:eventId" element={<Event />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
