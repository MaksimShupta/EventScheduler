import { useState, useEffect } from "react";
import { Link } from "react-router";
import { getEvents } from "../data/events";
import EventList from "../components/EventList";

const Home = () => {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const allEvents = await getEvents();
        setEvent(allEvents);
        // console.log(allEvents);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="p-10 flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl text-center font-bold tracking-wider my-16">
        Events
      </h1>
      <EventList events={events} />
      <h2 className="text-2xl text-center font-bold tracking-wider my-16">
        How to create your own event
      </h2>
      <div className="bg-[#282828] text-[#F5F5F5] rounded-xl p-10 border w-2/3 flex flex-col items-center gap-12 mb-16">
        <h3 className="text-xl text-center  tracking-wider uppercase">
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
    </div>
  );
};

export default Home;
