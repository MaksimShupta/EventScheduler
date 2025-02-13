import EventCard from "./EventCard";

const EventList = ({ events }) => {
  if (!events || events.length === 0) {
    return <p className="text-center">No events available.</p>;
  }

  return (
    <section className="grid grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventList;
