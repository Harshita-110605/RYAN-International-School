const API_KEY = 'YOUR_OPENAI_API_KEY';  // Replace with your OpenAI API key

// DOM elements
const chatBox = document.querySelector('.messages');
const messageInput = document.getElementById('message-input');

async function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        // Display user's message
        displayMessage(message, 'You');
        messageInput.value = '';

        // Call OpenAI API to get the teacher's response
        const response = await getGPT3Response(message);
        displayMessage(response, 'Teacher');
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = sender;
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the latest message
}

async function getGPT3Response(userMessage) {
    const apiUrl = 'https://api.openai.com/v1/completions';
    const data = {
        model: 'text-davinci-003',  // You can choose other models as well
        prompt: userMessage,
        max_tokens: 150,
        temperature: 0.9,
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const jsonResponse = await response.json();
    const gptResponse = jsonResponse.choices[0].text.trim();
    return gptResponse;
}
