// Array of images and their respective captions
const activities = [
    {
        img: 'images/4.jpg',
        caption: 'Annual Science Fair - Showcasing student innovations and experiments.',
    },
    {
        img: 'images/2.jpg',
        caption: 'Sports Day - Encouraging fitness, teamwork, and sportsmanship.',
    },
    {
        img: 'images/3.jpg',
        caption: 'Art Exhibition - A celebration of creativity and artistic expression.',
    },
    {
        img: 'images/1.jpg',
        caption: 'Music Performance - Nurturing talent through music and performances.',
    },
];


// Initialize index to track current slide
let currentIndex = 0;

// Load initial slide
function loadSlide(index) {
    const carouselImages = document.getElementById('carousel-images');
    const carouselCaption = document.getElementById('carousel-caption');

    // Set image and caption
    carouselImages.innerHTML = `<img src="${activities[index].img}" alt="Academic Activity">`;
    carouselCaption.innerText = activities[index].caption;
}

// Show the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + activities.length) % activities.length;
    loadSlide(currentIndex);
}

// Show the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % activities.length;
    loadSlide(currentIndex);
}

// Auto-slide functionality
function startCarousel() {
    loadSlide(currentIndex);
    setInterval(() => {
        nextSlide();
    }, 3000); // Slide interval of 3 seconds
}

// Start the carousel on page load
window.onload = startCarousel;
