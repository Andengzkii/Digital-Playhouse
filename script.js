// Function to get the user's location using IPinfo API
async function getUserLocation() {
    const apiKey = '83402f6feec1bc'; // Replace with your actual IPinfo API key
    const apiUrl = `https://ipinfo.io/json?token=${apiKey}`; // IPinfo API endpoint

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
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
    
    if (countryCode === 'BR') { // 'BR' is the country code for Brazil
        if (!currentLocation.includes('5518win.com')) {
            window.location.href = 'https://5518win.com/index?type=4&channelId=7381&fb_dynamic_pixel=2774791946023763';
        }
    } else {
        if (!currentLocation.includes('newlandingpage.onrender.com')) {
            window.location.href = 'https://newlandingpage.onrender.com';
        }
    }
}

// Call the redirect function immediately on page load
redirectBasedOnLocation();
