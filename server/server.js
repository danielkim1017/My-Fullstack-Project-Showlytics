const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi} = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/generate-itinerary', async(req,res) => {
    const{ destination, dates, activities } = req.body
}

if (!destination || !dates || !activities) {
    return res.status(400).json({error: 'Missing Required Fields.'});
}
)



















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
