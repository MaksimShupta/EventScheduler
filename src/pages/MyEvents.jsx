import { useState } from "react";
//since the data passed via the outlet, we import the useOutletContext hook from react-router
// import { useOutletContext, Navigate } from "react-router";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const MyEvents = () => {
    const [events, setEvents] = useState(
        JSON.parse(localStorage.getItem("events")) || []
    );

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="font-bold textLight text-3xl  text-center">
                Add a new Event!
            </h2>
            <EventForm events={events} setEvents={setEvents} />
            <h2 className="font-bold textLight text-3xl mb-10 text-center">
                My Events
            </h2>
            {events.length > 0 ? (
                <EventList events={events} />
            ) : (
                <p className="text-center text-gray-400 italic">
                    No events created yet. Start by adding a new one!
                </p>
            )}
        </div>
    );
};

export default MyEvents;
