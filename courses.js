// Define course details in an array of objects
const courses = [
    {
        title: "Introduction to Web Development",
        description: "Learn the basics of web development, including HTML, CSS, and JavaScript.",
        instructor: "John Doe",
        duration: "10 Weeks",
        schedule: "Mondays & Wednesdays, 6 PM - 8 PM",
        startDate: "November 15, 2024",
        link: "#"
    },
    {
        title: "Data Structures & Algorithms",
        description: "This course covers essential data structures and algorithms.",
        instructor: "Jane Smith",
        duration: "12 Weeks",
        schedule: "Tuesdays & Thursdays, 5 PM - 7 PM",
        startDate: "December 5, 2024",
        link: "#"
    },
    {
        title: "Artificial Intelligence Basics",
        description: "Introduction to AI, covering fundamental concepts and basic applications.",
        instructor: "Alice Brown",
        duration: "8 Weeks",
        schedule: "Fridays, 4 PM - 6 PM",
        startDate: "January 10, 2025",
        link: "#"
    },
    {
        title: "Cybersecurity Essentials",
        description: "Learn about key cybersecurity practices and threat prevention.",
        instructor: "Michael Green",
        duration: "6 Weeks",
        schedule: "Saturdays, 2 PM - 5 PM",
        startDate: "February 5, 2025",
        link: "#"
    }
];

// Function to generate HTML for each course and insert it into the page
function displayCourses() {
    const courseList = document.getElementById('course-list');
    
    // Iterate over each course and create HTML structure
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-info">
                <p><strong>Instructor:</strong> ${course.instructor}</p>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p><strong>Schedule:</strong> ${course.schedule}</p>
                <p><strong>Start Date:</strong> ${course.startDate}</p>
            </div>
            <a href="${course.link}" class="enroll-button">Enroll Now</a>
        `;
        
        // Append the generated course card to the course list container
        courseList.appendChild(courseCard);
    });
}

// Call the function to display courses
displayCourses();
