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

    if (countryCode === 'BR') { // 'BR' is the country code for Brazil
        if (!currentLocation.includes('5518win.com')) {
            console.log('Redirecting to 5518win.com');
            window.location.href = 'https://5518win.com/index?type=4&channelId=7381&fb_dynamic_pixel=2774791946023763';
        }
    } else {
        if (!currentLocation.includes('digital-playhouse.onrender.com')) {
            console.log('Redirecting to digital-playhouse.onrender.com');
            window.location.href = 'https://digital-playhouse.onrender.com/';
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
