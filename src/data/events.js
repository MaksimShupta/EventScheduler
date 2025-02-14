const getEvents = () => {
  const events = JSON.parse(localStorage.getItem("events"));
  console.log("Fetched events:", events); // Log events to check structure
  return events || []; // Return empty array if no events
};

export { getEvents };
