// Preload all images to prevent flicker
const imageUrls = [
    'images/trump-1-neutral.png',
    'images/trump-2-slightly-annoyed.png',
    'images/trump-3-annoyed.png',
    'images/trump-4-angry.png',
    'images/trump-5-very-angry.png',
    'images/trump-6-maximum-anger.png'
];

// Preload images
imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Get DOM elements
const slider = document.getElementById('donationSlider');
const donationAmount = document.getElementById('donationAmount');
const interactionText = document.getElementById('interactionText');
const donateButton = document.getElementById('donateButton');
const backgroundLayers = document.querySelectorAll('.background-layer');

// Configuration for crossfading ranges
const RANGES = [
    { min: 0, max: 200, fromLayer: 1, toLayer: 2 },
    { min: 200, max: 400, fromLayer: 2, toLayer: 3 },
    { min: 400, max: 600, fromLayer: 3, toLayer: 4 },
    { min: 600, max: 800, fromLayer: 4, toLayer: 5 },
    { min: 800, max: 1000, fromLayer: 5, toLayer: 6 }
];

// Fun messages that change based on donation amount
const MESSAGES = [
    { threshold: 0, text: "Every euro pushes him closer to meltdown." },
    { threshold: 100, text: "He's starting to notice..." },
    { threshold: 200, text: "Now he's getting annoyed!" },
    { threshold: 400, text: "You're really getting under his skin!" },
    { threshold: 600, text: "He's losing it!" },
    { threshold: 800, text: "Maximum fury unlocked!" }
];

/**
 * Calculate and apply crossfade opacity based on slider value
 * Ensures only ONE face is prominently visible at a time
 */
function updateCrossfade(value) {
    // Find which range we're in
    let currentRange = null;
    for (const range of RANGES) {
        if (value >= range.min && value <= range.max) {
            currentRange = range;
            break;
        }
    }

    if (!currentRange) return;

    // Calculate progress within the current range (0 to 1)
    const rangeSize = currentRange.max - currentRange.min;
    const valueInRange = value - currentRange.min;
    const progress = valueInRange / rangeSize;

    // Use easing function for smoother, more natural transitions
    const easedProgress = easeInOutCubic(progress);

    // Set opacity for all layers - ensure only one face is visible
    backgroundLayers.forEach((layer, index) => {
        const layerNumber = index + 1;

        if (layerNumber === currentRange.fromLayer) {
            // Fade out the "from" layer smoothly
            layer.style.opacity = 1 - easedProgress;
        } else if (layerNumber === currentRange.toLayer) {
            // Fade in the "to" layer smoothly
            layer.style.opacity = easedProgress;
        } else {
            // Completely hide all other layers
            layer.style.opacity = 0;
        }
    });
}

/**
 * Easing function for smoother, more natural transitions
 */
function easeInOutCubic(t) {
    return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Update the displayed donation amount
 */
function updateDonationAmount(value) {
    donationAmount.textContent = `${value} €`;
}

/**
 * Update the interaction text based on donation amount
 */
function updateInteractionText(value) {
    // Find the appropriate message
    let message = MESSAGES[0].text;
    for (const msg of MESSAGES) {
        if (value >= msg.threshold) {
            message = msg.text;
        }
    }
    interactionText.textContent = message;
}

/**
 * Main handler for slider input
 */
function handleSliderChange(event) {
    const value = parseInt(event.target.value, 10);

    updateDonationAmount(value);
    updateCrossfade(value);
    updateInteractionText(value);
}

/**
 * Handle donate button click
 * Opens Campact donation form with pre-filled amount
 */
function handleDonateClick() {
    const donationValue = parseInt(slider.value, 10);

    // Campact donation form URL with da (donation amount) parameter
    const campactUrl = `https://aktion.campact.de/campact/unterstuetzen/spenden?da=${donationValue}`;

    // Open in new tab
    window.open(campactUrl, '_blank');
}

// Event listeners
slider.addEventListener('input', handleSliderChange);
donateButton.addEventListener('click', handleDonateClick);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state
    updateDonationAmount(0);
    updateCrossfade(0);
    updateInteractionText(0);

    console.log('Trump Anger Donation Page initialized');
    console.log('Images preloaded:', imageUrls.length);
    console.log('Mobile-optimized with improved transitions');
});
