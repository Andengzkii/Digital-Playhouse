// Function to get the user's location using GeoJS API
async function getUserLocation() {
    const apiUrl = 'https://get.geojs.io/v1/ip/country.json'; // GeoJS API endpoint

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('API Response:', data); // Log API response for debugging
        return data.country; // Return country code (e.g., 'BR' for Brazil)
    } catch (error) {
        console.error('Error fetching location:', error);
        return 'Unknown'; // Fallback in case of error
    }
}

// Redirect based on location
async function redirectBasedOnLocation() {
    const currentLocation = window.location.href;
    const countryCode = await getUserLocation();
    
    console.log('Current Location:', currentLocation);
    console.log('Country Code:', countryCode);

    // Define target URLs for easier modification and debugging
    const brazilUrl = 'https://5518win.com/index?type=4&channelId=7381&fb_dynamic_pixel=2774791946023763';
    const internationalUrl = 'https://digital-playhouse.onrender.com/';
    
    // Perform redirection based on country code
    if (countryCode === 'BR') {
        if (!currentLocation.includes('5518win.com')) {
            console.log('Redirecting to Brazil URL:', brazilUrl);
            window.location.href = brazilUrl;
        } else {
            console.log('Already on the Brazil URL');
        }
    } else {
        if (!currentLocation.includes('newlandingpage.onrender.com')) {
            console.log('Redirecting to International URL:', internationalUrl);
            window.location.href = internationalUrl;
        } else {
            console.log('Already on the International URL');
        }
    }
}

// Call the redirect function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    redirectBasedOnLocation();
});

// JavaScript for Modal
const modal = document.getElementById('exampleModal');
const closeModal = document.querySelector('.close-modal');
const interactiveButton = document.querySelector('.interactive-button');

if (interactiveButton && modal && closeModal) {
    interactiveButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
} else {
    console.error('Modal elements not found');
}
