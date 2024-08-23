// Function to get the user's location using IPAPI
async function getUserLocation() {
    const apiUrl = 'https://ipapi.co/json/';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Country Code:', data.country);
        return data.country; // Return country code (e.g., 'BR' for Brazil)
    } catch (error) {
        console.error('Error fetching location:', error);
        return 'Unknown'; // Fallback in case of error
    }
}

// Redirect based on location
async function redirectBasedOnLocation() {
    const countryCode = await getUserLocation();
    
    if (countryCode === 'BR') { // 'BR' is the country code for Brazil
        window.location.href = 'https://5518win.com/index?type=4&channelId=7381&fb_dynamic_pixel=2774791946023763';
    } else {
        window.location.href = 'https://digital-playhouse.onrender.com/';
    }
}

// Call the redirect function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', redirectBasedOnLocation);
