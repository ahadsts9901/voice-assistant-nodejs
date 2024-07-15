document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const commandOutput = document.getElementById('command-output');

    startBtn.addEventListener('click', () => {
        // Simulate a voice command (replace with actual voice recognition library)
        const voiceCommand = prompt('Speak your command:');
        if (voiceCommand) {
            processVoiceCommand(voiceCommand);
        }
    });
    function processVoiceCommand(command) {
        // Send the voice command to the server for processing
        fetch('/process-voice-command', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ command }),
        })
            .then(response => response.json())
            .then(data => {
                commandOutput.textContent = `Command Processed: ${data.message}`;
            })
            .catch(error => {
                console.error('Error processing command:', error);
                commandOutput.textContent = 'Error processing command';
            });
    }
});