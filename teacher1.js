// Simulate a teacher response with a predefined delay
const teacherResponses = {
    "John Doe": ["Hello! How can I help you today?", "Do you need assistance with web development?"],
    "Jane Smith": ["Hi! What questions do you have about data science?", "Feel free to ask anything about algorithms!"],
    "Alice Brown": ["Hi there! How can I assist with AI or machine learning?", "Let me know if you need resources or clarification!"]
};

// Function to start a chat with the teacher
function startChat(teacherName) {
    // Reset previous chat messages and input field
    clearChat();

    // Set the teacher's name in the chat modal header
    document.getElementById('teacher-name').innerText = teacherName;

    // Show the chat modal
    document.getElementById('chatModal').style.display = 'flex';

    // Display an initial message from the teacher
    displayMessage('teacher', teacherName);
}

// Function to display a message in the chat
function displayMessage(sender, name, message) {
    const messagesContainer = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    if (sender === 'teacher') {
        messageDiv.innerHTML = `<strong>${name}:</strong> ${message}`;
    } else {
        messageDiv.innerHTML = `<strong>You:</strong> ${message}`;
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Function to handle sending a message
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    const teacherName = document.getElementById('teacher-name').innerText;

    if (message !== "") {
        // Display the user's message
        displayMessage('user', 'You', message);

        // Clear the input field
        input.value = "";

        // Simulate a delay for the teacher's response
        setTimeout(function () {
            if (teacherResponses[teacherName]) {
                const response = teacherResponses[teacherName].shift(); // Get the next response from the teacher
                displayMessage('teacher', teacherName, response);
            }
        }, 1000);
    }
}

// Function to clear the chat history
function clearChat() {
    // Clear the messages container
    document.getElementById('messages').innerHTML = '';

    // Clear the chat input field
    document.getElementById('chat-input').value = '';
}

// Close the chat modal
function closeChat() {
    document.getElementById('chatModal').style.display = 'none';
}

// Close the chat modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === document.getElementById('chatModal')) {
        closeChat();
    }
}
