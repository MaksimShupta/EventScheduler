import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import SignUp from "./pages/SignUp";
import MyEvents from "./pages/MyEvents";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="sign-in" element={<AuthPage />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="my-events" element={<MyEvents />} />
                    {/* <Route
                        path="your-events"
                        element={
                            <EventForm events={events} setEvents={setEvents} />
                        } // ✅ `setEvents` übergeben
                    /> */}
                    {/* 
          <Route path="events/:eventId" element={<Event />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
