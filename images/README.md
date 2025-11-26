# Trump Anger Images Directory

This directory should contain 6 Trump anger level images.

## Required Images

Place these 6 images in this directory with **exact** filenames:

1. `trump-1-neutral.jpg` - Neutral expression (0-200€)
2. `trump-2-slightly-annoyed.jpg` - Slightly annoyed (200-400€)
3. `trump-3-annoyed.jpg` - Annoyed expression (400-600€)
4. `trump-4-angry.jpg` - Angry expression (600-800€)
5. `trump-5-very-angry.jpg` - Very angry (800-1000€)
6. `trump-6-maximum-anger.jpg` - Maximum anger (1000€)

## Image Specifications

- **Format**: JPG (recommended) or PNG
- **Resolution**: 1920x1080 or higher (Full HD+)
- **File size**: < 500KB per image (optimize for web)
- **Aspect ratio**: 16:9 (will be cropped to fill screen)

## How to Add Images

### Option 1: Split Composite Image

If you have a 2x3 grid composite:

```bash
pip install pillow
python split_composite.py /path/to/composite.jpg
```

This automatically creates all 6 images in this directory.

### Option 2: Manual Upload

1. Crop your images to show Trump's face prominently
2. Rename them exactly as listed above
3. Copy them to this directory
4. Commit and push to deploy

## Current Status

⚠️ **No images added yet**

The site currently shows gradient color fallbacks:
- Blue → Purple → Orange → Yellow → Red → Dark Red

Once you add real Trump images, they will automatically replace the gradients.

## Testing

After adding images, verify they work:

```bash
# Check files exist
ls -lh *.jpg

# Test locally
npm start

# Deploy
git add .
git commit -m "Add Trump anger images"
git push
```

## Tips

- Use consistent lighting across all 6 images
- Ensure Trump's face is centered
- Higher resolution is better (will be scaled down)
- Test on mobile to ensure face is visible
- Optimize images: https://tinypng.com
