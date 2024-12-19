// document.addEventListener("DOMContentLoaded", function() {

//     const teacherLinks = document.querySelectorAll(".teacher-link");
//     teacherLinks.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             const teacherName = this.getAttribute("data-teacher");
            
//             window.location.href = `chat.html?teacher=${teacherName}`;
//         });
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     // Add click event listeners to each chat button
//     const chatButtons = document.querySelectorAll(".chat-button");
//     chatButtons.forEach(button => {
//         button.addEventListener("click", function(event) {
//             event.preventDefault();
//             const teacherName = this.getAttribute("data-teacher");
//             // Redirect to the chat page and pass the teacher name as a parameter
//             window.location.href = `chat.html?teacher=${teacherName}`;
//         });
//     });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const chatButtons = document.querySelectorAll(".chat-button");
//     chatButtons.forEach(button => {
//         button.addEventListener("click", function(event) {
//             event.preventDefault();
//             const teacherName = this.getAttribute("data-teacher");
//             if (teacherName) {
//                 window.location.href = `chat.html?teacher=${encodeURIComponent(teacherName)}`;
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const chatButtons = document.querySelectorAll(".chat-button");
//     chatButtons.forEach(button => {
//         button.addEventListener("click", function(event) {
//             event.preventDefault();
//             const teacherName = this.getAttribute("data-teacher");
//             // Redirect to the chat page and pass the teacher name as a parameter
//             window.location.href = `chat.html?teacher=${encodeURIComponent(teacherName)}`;
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const chatButtons = document.querySelectorAll(".chat-button");
    chatButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const teacherName = this.getAttribute("data-teacher");
            // Redirect to the chat page and pass the teacher name as a parameter
            window.location.href = `chat.html?teacher=${encodeURIComponent(teacherName)}`;
        });
    });
});
