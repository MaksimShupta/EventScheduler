import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { getEvents } from "../data/events"; // Adjust this if needed

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      // Get all events from the function (e.g., from localStorage)
      const events = getEvents();
      console.log("Fetched events:", events);
      // Find the specific event based on eventId from URL
      const foundEvent = events.find((e) => e.id === eventId); // Use _id instead of id
      console.log("eventId:", eventId); // Log the eventId
      console.log("foundEvent:", foundEvent); // Log the event found or undefined
      if (foundEvent) {
        setEvent(foundEvent); // Set event state if found
      } else {
        console.log("Event not found.");
      }
      setLoading(false); // Stop loading once done
    };
    fetchEvent();
  }, [eventId]); // Trigger fetch when eventId changes

  // Handle loading or not found states
  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found.</p>;

  // Display event details
  return (
    <div className="p-10 bg-[#282828] text-[#F5F5F5] rounded-xl border">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="text-gray-400">{event.date}</p>
      <p className="mt-4">{event.description}</p>
      <p className="mt-2 font-semibold">{event.location}</p>

      <Link to="/" className="text-[#61BDCA] mt-4 inline-block">
        Back to events
      </Link>
    </div>
  );
};

export default EventDetails;
