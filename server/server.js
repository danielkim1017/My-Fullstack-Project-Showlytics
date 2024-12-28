const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/generate-itinerary', (req, res) => {
    const { destination, dates, activities } = req.body;

    // Basic validation
    if (!destination || !dates || !activities) {
        return res.status(400).json({ error: 'Missing required fields: destination, dates, or activities.' });
    }

    // Simulated itinerary
    const generatedItinerary = {
        destination,
        dates,
        activities,
        itinerary: [
            `Day 1: Visit famous landmarks in ${destination}.`,
            `Day 2: Explore activities such as ${activities.join(', ')} in and around ${destination}.`,
            `Day 3: Enjoy local cuisine and relax in ${destination}.`,
        ],
    };

    res.json(generatedItinerary);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
