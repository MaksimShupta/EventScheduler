import { Link } from "react-router";

const EventCard = ({ event }) => {
  const { title, date, description, location, id } = event;
  return (
    <div className="bg-[#282828] text-[#F5F5F5] rounded-xl p-6 border flex flex-col gap-8">
      <p className="px-4 py-2 bg-[#9E7A67] text-lg rounded-xl font-bold tracking-wider">
        {title}
      </p>
      <div className="flex items-center gap-4">
        <img
          src="src/assets/calendar-solid.svg"
          alt="Calendar icon"
          className="w-4"
        />
        <p className="text-sm">{date}</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="src/assets/location-dot-solid.svg"
          alt="Calendar icon"
          className="w-4"
        />
        <p className="text-sm">{location}</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="src/assets/circle-info-solid.svg"
          alt="Calendar icon"
          className="w-4"
        />
        <p className="text-sm">{description}</p>
      </div>
      <Link key={id} to={`events/${id}`}>
        <button className="border border-[#9E7A67] rounded-3xl px-4 py-2 text-sm">
          View details
        </button>
      </Link>
    </div>
  );
};

export default EventCard;
