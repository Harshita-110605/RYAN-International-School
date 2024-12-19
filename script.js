// Smooth Scroll for Learn More Button
document.getElementById('learnMoreButton').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#programs').scrollIntoView({ behavior: 'smooth' });
});

// Testimonial Slider Auto-Switch
let testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function switchTestimonial() {
    testimonials[currentTestimonial].style.opacity = '0';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.opacity = '1';
}

setInterval(switchTestimonial, 3000);
