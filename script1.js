document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider-image");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Initialize the first image
    images[currentIndex].classList.add("active");

    // Set the interval for rotating images
    setInterval(showNextImage, 3000); // Change every 3 seconds

    // Smooth scroll for Learn More button
    document.getElementById('learnMoreButton').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#programs').scrollIntoView({ behavior: 'smooth' });
    });
});
