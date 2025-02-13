const getEvents = async () => {
    try {
        const res = await fetch(`${window.location.origin}/api/events`);
        if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Fetch events error:", error.message);
        return [];
    }
};

export { getEvents };
