import React, { useState } from 'react';
import { generateItinerary } from '../utils/api';

const TravelForm = () => {
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState('');
    const [activities, setActivities] = useState('');
    const [itinerary, setItinerary] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const preferences = { destination, dates, activities };
        const generatedItinerary = await generateItinerary(preferences);
        setItinerary(generatedItinerary);
    };

    return (
        <div>
            <h1>Plan Your Trip</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Destination:
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </label>
                <label>
                    Travel Dates:
                    <input
                        type="text"
                        value={dates}
                        onChange={(e) => setDates(e.target.value)}
                    />
                </label>
                <label>
                    Activities:
                    <input
                        type="text"
                        value={activities}
                        onChange={(e) => setActivities(e.target.value)}
                    />
                </label>
                <button type="submit">Generate Itinerary</button>
            </form>

            {itinerary && (
                <div>
                    <h2>Your Itinerary</h2>
                    <pre>{JSON.stringify(itinerary, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TravelForm;