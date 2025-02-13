import EventCard from "./EventCard";

const EventList = ({ events }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
};

export default EventList;
