#!/usr/bin/env python3
"""
Create colored placeholder images for testing the crossfading effect.
Run this to test the page functionality before adding the real Trump images.
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    print("✓ PIL (Pillow) is available")
except ImportError:
    print("✗ PIL (Pillow) not installed")
    print("\nInstall it with:")
    print("  pip install pillow")
    exit(1)

import os

# Create images directory if it doesn't exist
os.makedirs('images', exist_ok=True)

# Define placeholder images with colors and labels
placeholders = [
    ('trump-1-neutral.jpg', '#4A90E2', 'Level 1\nNeutral'),
    ('trump-2-slightly-annoyed.jpg', '#7B68EE', 'Level 2\nSlightly Annoyed'),
    ('trump-3-annoyed.jpg', '#F5A623', 'Level 3\nAnnoyed'),
    ('trump-4-angry.jpg', '#F8E71C', 'Level 4\nAngry'),
    ('trump-5-very-angry.jpg', '#FF6B6B', 'Level 5\nVery Angry'),
    ('trump-6-maximum-anger.jpg', '#D0021B', 'Level 6\nMAXIMUM ANGER'),
]

# Image dimensions (Full HD)
width, height = 1920, 1080

print(f"\nCreating {len(placeholders)} placeholder images...")
print(f"Size: {width}x{height} pixels\n")

for filename, color, label in placeholders:
    # Create image with solid color
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img)

    # Try to use a large font, fallback to default if not available
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 120)
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 60)
    except:
        font = ImageFont.load_default()
        small_font = font

    # Draw text in center
    text = label
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    position = ((width - text_width) // 2, (height - text_height) // 2)

    # Draw shadow
    draw.text((position[0] + 4, position[1] + 4), text, fill='black', font=font, align='center')
    # Draw main text
    draw.text(position, text, fill='white', font=font, align='center')

    # Add "PLACEHOLDER" watermark
    watermark = "PLACEHOLDER - Add real images"
    bbox = draw.textbbox((0, 0), watermark, font=small_font)
    wm_width = bbox[2] - bbox[0]
    wm_position = ((width - wm_width) // 2, height - 100)
    draw.text(wm_position, watermark, fill='rgba(255,255,255,0.7)', font=small_font)

    # Save image
    filepath = os.path.join('images', filename)
    img.save(filepath, 'JPEG', quality=85)

    file_size = os.path.getsize(filepath)
    print(f"✓ Created {filename} ({file_size // 1024}KB)")

print(f"\n✓ All placeholder images created in 'images/' directory")
print(f"\nNow you can test the crossfading effect!")
print(f"Replace these with real Trump images when ready.")
