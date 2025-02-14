import { useState } from "react";
import LocationInput from "../components/LocationInput";
import LocationMap from "../components/LocationMap"; // Import Map
import { useOutletContext } from "react-router";

const EventForm = ({ setEvents }) => {
  const [locationData, setLocationData] = useState(null);
  const { allEvents, setAllEvents } = useOutletContext();

  const handleLocationSelect = (location) => {
    const selectedLocation = {
      address: location.display_name,
      latitude: parseFloat(location.lat),
      longitude: parseFloat(location.lon),
    };

    setLocationData(selectedLocation);

    // ✅ Speichere die Location auch in form
    setForm((prev) => ({
      ...prev,
      location: selectedLocation.address, // Oder direkt ein Objekt, falls nötig
    }));
  };

  // alle funktionen ändern
  const [form, setForm] = useState({
    title: "",
    date: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Event:", form); // 🔥 Debug: Zeigt aktuellen Wert von `form`

    const newEvent = { ...form, _id: crypto.randomUUID() };
    setEvents((prev) => {
      const updatedEvents = [...prev, newEvent];
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      return updatedEvents;
    });

    setAllEvents((prev) => {
      const updatedAllEvents = [...prev, newEvent];
      return updatedAllEvents;
    });

    setForm({
      title: "",
      date: "",
      description: "",
      location: "",
    });
  };
  // bis hier und nicht weiter

  return (
    <section className="items-center flex flex-col px-4 py-10">
      <div className="border border-light textLight rounded-xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-5 bg-bgLight">
        <form
          onSubmit={handleSubmit}
          id="add-form"
          className="items-center flex flex-col px-4 pb-8 gap-5"
        >
          <label className="input-custom gap-2 w-full">
            <input
              value={form.title}
              onChange={handleChange}
              name="title"
              className="grow"
              placeholder="Event Title"
              required
            />
          </label>
          <label className="input-custom gap-2 w-full">
            <input
              value={form.date}
              onChange={handleChange}
              type="date"
              name="date"
              className="grow"
              required
            />
          </label>
          <label className="textarea-custom gap-2 w-full">
            <textarea
              value={form.description}
              onChange={handleChange}
              name="description"
              className="grow w-full bg-bgInput h-full"
              placeholder="Describe your event..."
              required
            />
          </label>

          {/* Location Input */}
          <LocationInput onSelect={handleLocationSelect} />

          {/* Map wird nur angezeigt, wenn eine Location ausgewählt wurde */}
          {locationData && (
            <LocationMap
              latitude={locationData.latitude}
              longitude={locationData.longitude}
              address={locationData.address}
            />
          )}

          <button
            id="submit-btn"
            type="submit"
            className="btn-primary block mx-auto text-lg"
          >
            Add event
          </button>
        </form>
      </div>
    </section>
  );
};

export default EventForm;
