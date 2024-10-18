const express = require('express');
const axios = require('axios');
const app = express();

const port = 3000;

// Basic Route
app.get('/', (req, res) => {
    res.send('Hello GPT!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});