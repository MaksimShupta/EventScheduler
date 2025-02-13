const getEvents = async () => {
  const res = await fetch("http://localhost:3001/events");
  if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

  const data = await res.json();
  return Array.isArray(data) ? data : []; // Just return the data directly
};

export { getEvents };
