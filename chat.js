// document.addEventListener("DOMContentLoaded", function() {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const teacherName = urlParams.get('teacher');

//     const chatBox = document.querySelector('.messages');
//     const messageInput = document.getElementById('message-input');

//     function displayMessage(message, sender) {
//         const messageElement = document.createElement('div');
//         messageElement.className = sender;
//         messageElement.textContent = `${sender}: ${message}`;
//         chatBox.appendChild(messageElement);
//     }

//     function sendMessage() {
//         const message = messageInput.value.trim();
//         if (message) {
//             displayMessage(message, 'You');
//             messageInput.value = '';
            
//             setTimeout(() => displayMessage(`Hello! How can I help you?`, teacherName), 1000);
//         }
//     }

//     window.sendMessage = sendMessage;
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const teacherName = urlParams.get('teacher'); // Extract the teacher's name from the URL

//     const chatBox = document.querySelector('.messages');
//     const messageInput = document.getElementById('message-input');

//     function displayMessage(message, sender) {
//         const messageElement = document.createElement('div');
//         messageElement.className = sender;
//         messageElement.textContent = `${sender}: ${message}`;
//         chatBox.appendChild(messageElement);
//         chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
//     }

//     function sendMessage() {
//         const message = messageInput.value.trim();
//         if (message) {
//             displayMessage(message, 'You');
//             messageInput.value = '';
//             setTimeout(() => {
//                 if (teacherName) {
//                     displayMessage(`Hello, this is ${teacherName}. How can I assist you?`, teacherName);
//                 } else {
//                     displayMessage(`Hello! How can I assist you?`, 'Teacher');
//                 }
//             }, 1000);
//         }
//     }

//     window.sendMessage = sendMessage;
// });



// document.addEventListener("DOMContentLoaded", function() {
//     // Get the teacher's name from the URL query parameter
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const teacherName = urlParams.get('teacher');

//     // Display the teacher's name in the chat page
//     const teacherNameElement = document.getElementById('teacher-name');
//     teacherNameElement.textContent = `Chat with ${teacherName}`;

//     const chatBox = document.querySelector('.messages');
//     const messageInput = document.getElementById('message-input');

//     function displayMessage(message, sender) {
//         const messageElement = document.createElement('div');
//         messageElement.className = sender;
//         messageElement.textContent = `${sender}: ${message}`;
//         chatBox.appendChild(messageElement);
//         chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
//     }

//     function sendMessage() {
//         const message = messageInput.value.trim();
//         if (message) {
//             // Display user's message
//             displayMessage(message, 'You');
//             messageInput.value = '';

//             // Simulate teacher's response after 1 second
//             setTimeout(() => {
//                 displayMessage(`This is ${teacherName}. How can I help you?`, teacherName);
//             }, 1000);
//         }
//     }

//     window.sendMessage = sendMessage;
// });


document.addEventListener("DOMContentLoaded", function() {
    // Get the teacher's name from the URL query parameter
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const teacherName = urlParams.get('teacher');

    // Display the teacher's name in the chat page
    const teacherNameElement = document.getElementById('teacher-name');
    teacherNameElement.textContent = `Chat with ${teacherName}`;

    const chatBox = document.querySelector('.messages');
    const messageInput = document.getElementById('message-input');

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = `${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    }

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            // Display user's message
            displayMessage(message, 'you');
            messageInput.value = '';

            // Simulate teacher's response
            setTimeout(() => {
                let response = generateTeacherResponse(message);
                displayMessage(response, 'teacher');
            }, 1000);
        }
    }

    // Simple response generator for teacher (You can replace this with real responses)
    function generateTeacherResponse(studentMessage) {
        const responses = {
            "hello": "Hi! How can I help you today?",
            "how are you?": "I'm doing great, thank you! How about you?",
            "math help": "Sure! What topic do you need help with in math?",
            "science question": "What science topic are you struggling with?",
            "bye": "Goodbye! Have a great day!"
        };

        return responses[studentMessage.toLowerCase()] || "I'm not sure how to respond to that, but I'll look into it.";
    }

    window.sendMessage = sendMessage;
});



// const API_KEY = 'YOUR_OPENAI_API_KEY';  // Replace with your OpenAI API key

// // DOM elements
// const chatBox = document.querySelector('.messages');
// const messageInput = document.getElementById('message-input');

// async function sendMessage() {
//     const message = messageInput.value.trim();
//     if (message) {
//         // Display user's message
//         displayMessage(message, 'You');
//         messageInput.value = '';

//         // Call OpenAI API to get the teacher's response
//         const response = await getGPT3Response(message);
//         displayMessage(response, 'Teacher');
//     }
// }

// function displayMessage(message, sender) {
//     const messageElement = document.createElement('div');
//     messageElement.className = sender;
//     messageElement.textContent = `${sender}: ${message}`;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the latest message
// }

// async function getGPT3Response(userMessage) {
//     const apiUrl = 'https://api.openai.com/v1/completions';
//     const data = {
//         model: 'text-davinci-003',  // You can choose other models as well
//         prompt: userMessage,
//         max_tokens: 150,
//         temperature: 0.9,
//     };

//     const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${API_KEY}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });

//     const jsonResponse = await response.json();
//     const gptResponse = jsonResponse.choices[0].text.trim();
//     return gptResponse;
// }
