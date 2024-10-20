const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.on('error', (err) => {
    console.error('Server error:', err);
});