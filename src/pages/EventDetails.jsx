import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Make sure to import correctly
import { getEvents } from "../data/events"; // Import event fetching function

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        console.log("Fetching event...");
        const allEvents = await getEvents(); // Fetch all events
        const selectedEvent = allEvents.find(
          (event) => event.id.toString() === eventId
        );

        if (!selectedEvent) {
          throw new Error(`Event with ID ${eventId} not found.`);
        }

        setEventData(selectedEvent);
      } catch (error) {
        console.error("Error fetching event:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-10 bg-[#282828] text-[#F5F5F5] rounded-xl border">
      <h1 className="text-2xl font-bold">{eventData?.title || "No Title"}</h1>
      <p className="text-gray-400">{eventData?.date || "No Date"}</p>
      <p className="mt-4">{eventData?.description || "No Description"}</p>
      <p className="mt-2 font-semibold">
        {eventData?.location || "No Location"}
      </p>

      <Link to="/" className="text-[#61BDCA] mt-4 inline-block">
        Back to events
      </Link>
    </div>
  );
};

export default EventDetails;
