# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Add the Trump Images

The composite image you provided needs to be split into 6 individual images.

**Easy method:**

1. Save the composite image (2x3 grid) to this directory as `trump-composite.jpg`
2. Run the split script:
   ```bash
   pip install pillow
   python split_composite.py trump-composite.jpg
   ```

This will automatically create 6 images in the `images/` directory.

**Manual method:**

Crop the composite image into 6 separate files and save them as:
- `images/trump-1-neutral.jpg` (top-left)
- `images/trump-2-slightly-annoyed.jpg` (top-right)
- `images/trump-3-annoyed.jpg` (middle-left)
- `images/trump-4-angry.jpg` (middle-right)
- `images/trump-5-very-angry.jpg` (bottom-left)
- `images/trump-6-maximum-anger.jpg` (bottom-right)

### Step 2: Test Locally

Open `index.html` in your browser:

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Step 3: Configure Donation Link

Edit `script.js` line 107 to set the actual Campact donation URL:

```javascript
const campactUrl = `https://www.campact.de/spenden/?amount=${donationValue}`;
```

## ✨ Features

- **Smooth crossfading** between 6 anger levels (300ms transitions)
- **Real-time donation display** updates as you slide
- **Responsive design** works on all devices
- **No build process** - pure HTML, CSS, JS

## 🎯 How to Use

1. Move the slider from 0€ to 1000€
2. Watch Trump get progressively angrier
3. Click "Donate Now" to redirect to Campact

## 🔧 Customization

All configuration is clearly commented in the code:

- **Donation range**: `index.html` line 35
- **Crossfade speed**: `style.css` line 26
- **Anger messages**: `script.js` lines 28-35
- **Transition ranges**: `script.js` lines 21-27

## 📝 Notes

- Images are preloaded to prevent flicker
- Only 2 images visible at a time for smooth performance
- Dark overlay ensures text readability
- All crossfading happens in pure CSS/JS, no libraries needed

## 🎨 The Math Behind the Crossfade

For any slider value:
1. Determine which range (0-200, 200-400, etc.)
2. Calculate progress within that range (0-1)
3. Set opacity of "from" image to `1 - progress`
4. Set opacity of "to" image to `progress`
5. Hide all other images

This creates seamless transitions without hard cuts.

---

**Ready to make Trump mad? Slide away!** 😄
