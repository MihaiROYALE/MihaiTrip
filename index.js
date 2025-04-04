// Function to handle collapsible menu toggle
function toggleCollapse(event) {
    // Check if the click came from the menu-close-btn
    const isMenuCloseBtn = event && event.target.classList.contains('menu-close-btn');
    const navContent = document.querySelector('.nav-list');
    const collapsibleContent = document.querySelector('.collapsible-content');

    // Handle original collapsible content toggle
    if (collapsibleContent) {
        collapsibleContent.classList.toggle('active');
    }
}

// Function to handle scroll event for the header and scroll button
function handleScroll() {
    const navigation = document.querySelector('.main-navigation');
    const scrollButton = document.querySelector('#scrollButton');

    // Header scroll effect
    if (window.scrollY > 50) { // If scrolled more than 50px
        navigation.classList.add('scrolled');
    } else {
        navigation.classList.remove('scrolled');
    }

    // Update scroll button text and behavior
    if (scrollButton) {
        if (window.scrollY <= 50) {
            scrollButton.innerHTML = '↓ Bottom';
        } else {
            scrollButton.innerHTML = '↑ Top';
        }
    }
}

// Function to handle scroll button click
function handleScrollButtonClick() {
    if (window.scrollY <= 50) {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    } else {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Add event listener for the scroll button
const scrollButton = document.querySelector('#scrollButton');
if (scrollButton) {
    scrollButton.addEventListener('click', handleScrollButtonClick);
}

// Add event listener for the menu toggle
const menuButton = document.querySelector('.menu-btn');
if (menuButton) {
    menuButton.addEventListener('click', toggleCollapse);
}

// Fetch the YouTube logo SVG using no-cors mode (limited access)
fetch('https://unpkg.com/ionicons@7.1.0/dist/ionicons/svg/logo-youtube.svg', { mode: 'no-cors' })
    .then(response => {
        console.log("SVG fetched successfully, but content is unavailable due to no-cors mode.");
    })
    .catch(error => console.error("Error fetching SVG:", error));
