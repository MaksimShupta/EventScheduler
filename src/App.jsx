import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AuthPage from "./pages/AuthPage";

function App() {
    return (
        // <BrowserRouter>
        //   <Routes>
        //     <Route path="/" element={<MainLayout />}>
        //       <Route index element={<Home />} />
        //       <Route path="your-events" element={<YourEvents />} />
        //       <Route path="sign-in" element={<SignIn />} />
        //       <Route path="sign-up" element={<SignUp />} />
        //       <Route path="events/:eventId" element={<Event />} />
        //     </Route>
        //   </Routes>
        // </BrowserRouter>
        <>
            <AuthPage />
        </>
    );
}

export default App;
