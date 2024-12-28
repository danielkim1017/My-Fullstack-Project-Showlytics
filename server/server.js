app.post('/generate-itinerary', (req, res) => {
    const { destination, dates, activities } = req.body;

    // Placeholder for the actual OpenAI API call
    const generatedItinerary = {
        destination,
        dates,
        activities,
        itinerary: [
            `Day 1: Visit ${destination} landmarks`,
            `Day 2: Explore ${activities} around ${destination}`,
            `Day 3: Relax and enjoy the local cuisine`
        ],
    };

    res.json(generatedItinerary);
});