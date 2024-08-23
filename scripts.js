// Function to get the user's location using IPAPI
async function getUserLocation() {
    const apiUrl = 'https://ipapi.co/json/';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.country;
    } catch (error) {
        console.error('Error fetching location:', error);
        return 'Unknown';
    }
}

// Redirect based on location, ensuring no infinite loop
async function redirectBasedOnLocation() {
    const currentLocation = window.location.href;
    const countryCode = await getUserLocation();

    // URLs for redirection
    const brazilUrl = 'https://5518win.com/index?type=4&channelId=7381&fb_dynamic_pixel=2774791946023763';
    const internationalUrl = 'https://digital-playhouse.onrender.com/';

    // Check local storage to see if the user has already been redirected
    const hasRedirected = localStorage.getItem('hasRedirected');

    if (!hasRedirected) {
        if (countryCode === 'BR' && !currentLocation.includes('5518win.com')) {
            localStorage.setItem('hasRedirected', 'true');
            window.location.replace(brazilUrl);
        } else if (countryCode !== 'BR' && !currentLocation.includes('digital-playhouse.onrender.com')) {
            localStorage.setItem('hasRedirected', 'true');
            window.location.replace(internationalUrl);
        }
    }
}

// Call the redirect function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', redirectBasedOnLocation);

// JavaScript for Modal
const modal = document.getElementById('exampleModal');
const closeModal = document.querySelector('.close-modal');

document.querySelector('.interactive-button').addEventListener('click', function() {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
