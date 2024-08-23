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

// Redirect based on location, ensuring no infinite loop
async function redirectBasedOnLocation() {
    const currentLocation = window.location.href;
    const countryCode = await getUserLocation();

    console.log('Current Location:', currentLocation);
    console.log('Country Code:', countryCode);

    // Define the URLs for redirection
    const brazilUrl = 'https://5518win.com/index?type=4&channelId=7381&fb_dynamic_pixel=2774791946023763';
    const internationalUrl = 'https://digital-playhouse.onrender.com/';

    // Prevent redirection loop by checking if already on the target page
    if (countryCode === 'BR' && !currentLocation.includes('5518win.com')) {
        console.log('Redirecting to Brazil URL:', brazilUrl);
        window.location.replace(brazilUrl);
    } else if (countryCode !== 'BR' && !currentLocation.includes('digital-playhouse.onrender.com')) {
        console.log('Redirecting to International URL:', internationalUrl);
        window.location.replace(internationalUrl);
    } else {
        console.log('No redirection needed');
    }
}

// Call the redirect function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', redirectBasedOnLocation);
