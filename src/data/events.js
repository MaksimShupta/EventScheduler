const getEvents = async () => {
  const res = await fetch("http://localhost:3001/api/events");
  if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

  const data = await res.json();
  //   console.log(data.results);

  return data.results;
};

export { getEvents };
