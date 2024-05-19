// Function to handle header color change
function changeHeaderColor() {
    const header = document.getElementById('header');
    if (window.scrollY >= 69) {
        // Add a class when scrolled beyond the threshold
        header.classList.add('scrolledHeader');
    } else {
        // Remove the class when scrolled back to the initial state
        header.classList.remove('scrolledHeader');
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', changeHeaderColor);
