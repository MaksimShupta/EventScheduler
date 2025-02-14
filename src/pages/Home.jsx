import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getEvents } from "../data/events";
import EventList from "../components/EventList";
import { useOutletContext } from "react-router";
import { isAuthenticated } from "../data/authentication";

// import { useNavigate } from "react-router";
// import { isAuthenticated } from "../data/authentication";

const Home = () => {
  // const navigate = useNavigate();
  const [apiEvents, setApiEvents] = useState([]);
  const { allEvents, setAllEvents, authenticated } = useOutletContext();

  useEffect(() => {
    // if (!isAuthenticated()) {
    //     navigate("/sign-in"); // Redirect to login if not authenticated
    // }
    // setAuthenticated(isAuthenticated()); // Check if user is authenticated

    (async () => {
      try {
        const allApiEvents = await getEvents();
        setApiEvents(allApiEvents);
        // console.log(allEvents);
        const formattedApiEvents = allApiEvents.map((event) => ({
          _id: event._id || crypto.randomUUID(), // Ensure every event has an ID
          title: event.name || event.title, // Handle different key names
          date: event.date,
          description: event.description,
          location: event.location,
        }));

        setAllEvents((prev) => {
          // Check if API events are already added
          const apiIds = new Set(prev.map((event) => event._id));
          const newApiEvents = allApiEvents.filter(
            (event) => !apiIds.has(event._id)
          );

          return [...prev, ...newApiEvents];
        });

        // setAllEvents((prev) => [...prev, ...formattedApiEvents]);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  console.log("All Events in State:", allEvents);

  return (
    <div className="p-10 flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl text-center font-bold tracking-wider my-16">
        Events
      </h1>
      <EventList events={authenticated ? allEvents : apiEvents} />
      <h2 className="text-2xl text-center font-bold tracking-wider my-16">
        How to create your own event
      </h2>
      {/* Conditionally render this section based on authentication */}
      {authenticated ? (
        <div className="bg-[#282828] text-[#F5F5F5] rounded-xl p-10 border w-2/3 flex flex-col items-center gap-12 mb-16">
          <h3 className="text-xl text-center tracking-wider uppercase">
            Just follow these steps
          </h3>
          <div className="flex justify-between items-center w-2/3">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="h-28 w-28 bg-[#61BDCA] rounded-full flex justify-center items-center">
                <p className="font-bold text-4xl pb-1">1</p>
              </div>
              <p>Create your event</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="h-28 w-28 bg-[#61BDCA] rounded-full flex justify-center items-center">
                <p className="font-bold text-4xl pb-1">2</p>
              </div>
              <p>Save & have fun</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#282828] text-[#F5F5F5] rounded-xl p-10 border w-2/3 flex flex-col items-center gap-12 mb-16">
          <h3 className="text-xl text-center tracking-wider uppercase">
            Just follow these steps
          </h3>
          <div className="flex justify-between items-center w-2/3">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="h-28 w-28 bg-[#61BDCA] rounded-full flex justify-center items-center">
                <p className="font-bold text-4xl pb-1">1</p>
              </div>
              <p>
                <Link to="/sign-in" className="text-[#61BDCA]">
                  Log in
                </Link>{" "}
                or{" "}
                <Link to="/sign-up" className="text-[#61BDCA]">
                  Sign up
                </Link>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="h-28 w-28 bg-[#61BDCA] rounded-full flex justify-center items-center">
                <p className="font-bold text-4xl pb-1">2</p>
              </div>
              <p>Create your event</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="h-28 w-28 bg-[#61BDCA] rounded-full flex justify-center items-center">
                <p className="font-bold text-4xl pb-1">3</p>
              </div>
              <p>Save & have fun</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
