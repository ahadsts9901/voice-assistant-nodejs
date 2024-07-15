const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Dummy endpoint for processing voice commands

app.post('/process-voice-command', (req, res) => {

    const command = req.body.command;

    // Process the command here (integrate external APIs, perform actions, etc.)
    
    console.log(`Received command: ${command}`);
    res.json({ message: 'Command processed successfully' });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});