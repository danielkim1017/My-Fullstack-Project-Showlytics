// utils/api.js

const API_URL = 'http://localhost:4000';  // URL of your backend

export const generateItinerary = async (preferences) => {
    try {
        const response = await fetch(`${API_URL}/generate-itinerary`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(preferences),
        });

        if (!response.ok) {
            throw new Error('Failed to generate itinerary');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};