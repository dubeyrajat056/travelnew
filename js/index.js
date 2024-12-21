// Get the airplane element
const airplane = document.querySelector('.airplane');
const container = document.querySelector('.container');

// Function to move the airplane smoothly
function moveAirplane() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Generate random positions within the container
    const randomX = Math.random() * (containerWidth - 50); // Avoid airplane going outside the right edge
    const randomY = Math.random() * (containerHeight - 50); // Avoid airplane going outside the bottom edge

    // Update the airplane's position smoothly
    airplane.style.left = `${randomX}px`;
    airplane.style.top = `${randomY}px`;
}

// Move the airplane every 2 seconds
setInterval(moveAirplane, 2000);








$(document).ready(function () {
    let colors = [
        "linear-gradient(to right, #ff7eb3, #ff758c)",
        "linear-gradient(to right, #6a11cb, #2575fc)",
        "linear-gradient(to right, #ff9966, #ff5e62)",
        "linear-gradient(to right, #00c6ff, #0072ff)"
    ];
    let i = 0;

    function changeBackground() {
        $("body").css("background", colors[i]);
        i = (i + 1) % colors.length;
    }

    setInterval(changeBackground, 3000); // Change background every 3 seconds
});