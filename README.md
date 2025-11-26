# Trump Anger Donation Page - Proof of Concept

A humorous, provocative donation page where Donald Trump gets progressively angrier as the user increases the donation amount, using smooth crossfading transitions.

## Features

- **Smooth Crossfading**: 6 anger levels that seamlessly transition as you slide
- **Real-time Updates**: Donation amount and messaging update instantly
- **Fully Responsive**: Works perfectly on mobile and desktop
- **Optimized Performance**: Images preloaded to prevent flicker

## Setup Instructions

### 1. Add Trump Anger Images

You need to split the provided composite image into 6 separate images and place them in the `images/` directory with these exact names:

- `trump-1-neutral.jpg` (top-left)
- `trump-2-slightly-annoyed.jpg` (top-right)
- `trump-3-annoyed.jpg` (middle-left)
- `trump-4-angry.jpg` (middle-right)
- `trump-5-very-angry.jpg` (bottom-left)
- `trump-6-maximum-anger.jpg` (bottom-right)

#### Option A: Manual Extraction
Use any image editor (Photoshop, GIMP, etc.) to crop the composite into 6 separate images.

#### Option B: Automated Splitting
Use the provided Python script:

```bash
# Install required package if not already installed
pip install pillow

# Run the script
python split_composite.py path/to/composite-image.jpg
```

This will automatically create the 6 images in the `images/` directory.

### 2. Open the Page

Simply open `index.html` in your browser. No build process required!

```bash
# With Python
python -m http.server 8000

# Then open http://localhost:8000
```

### 3. Configure Donation URL

In `script.js`, update the Campact donation URL on line 107:

```javascript
const campactUrl = `https://www.campact.de/spenden/?amount=${donationValue}`;
```

## How It Works

### Crossfading Logic

The page uses 6 stacked background images with smooth opacity transitions:

- **0-200€**: Crossfade between neutral → slightly annoyed
- **200-400€**: Crossfade between slightly annoyed → annoyed
- **400-600€**: Crossfade between annoyed → angry
- **600-800€**: Crossfade between angry → very angry
- **800-1000€**: Crossfade between very angry → maximum anger

Only two adjacent images are visible at any time, creating a seamless transition effect.

### Technical Implementation

- **HTML**: Clean structure with stacked background layers
- **CSS**: 300ms opacity transitions, responsive design
- **JavaScript**: Calculates opacity values based on slider position

## Customization

### Change Donation Range

Edit `index.html` line 35:

```html
<input type="range" min="0" max="1000" value="0">
```

### Adjust Crossfade Speed

Edit `style.css` line 26:

```css
transition: opacity 300ms ease-in-out;
```

### Add More Anger Levels

1. Add more images to the `images/` directory
2. Add background layers in `index.html`
3. Update the `RANGES` array in `script.js`

### Customize Messages

Edit the `MESSAGES` array in `script.js` lines 28-35.

## Browser Compatibility

- Chrome, Edge, Safari: Full support
- Firefox: Full support
- Mobile browsers: Full support
- IE11: Not supported (but who cares)

## License

This is a proof of concept for educational/satirical purposes.
