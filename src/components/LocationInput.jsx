import { useState } from "react";
import fetchLocations from "../utils/fetchLocations"; // Import der neuen Funktion

const LocationInput = ({ onSelect }) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        const locations = await fetchLocations(value);
        setSuggestions(locations);
    };

    const handleSelect = (location) => {
        setQuery(location.display_name);
        setSuggestions([]); // Liste ausblenden
        onSelect(location); // Die ausgewählte Location weitergeben
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                className="input-custom w-full bg-bgInput text-textLight input input-bordered p-3 rounded-lg placeholder-gray-400"
                placeholder="Enter event location..."
                required
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-bgLight text-textLight w-full border border-light rounded-md mt-1 max-h-48 overflow-auto">
                    {suggestions.map((location) => (
                        <li
                            key={location.place_id}
                            onClick={() => handleSelect(location)}
                            className="p-2 cursor-pointer hover:bg-accent">
                            {location.display_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationInput;
