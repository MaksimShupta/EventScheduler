const fetchLocations = async (searchTerm) => {
    if (searchTerm.length < 3) return []; // Erst ab 3 Buchstaben suchen

    try {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${searchTerm}`
        );
        if (!res.ok) {
            throw new Error("Failed to fetch locations");
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching locations:", error);
        return [];
    }
};

export default fetchLocations;
