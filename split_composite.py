#!/usr/bin/env python3
"""
Split the composite Trump anger image into 6 individual images.

The composite is arranged in a 2x3 grid:
- Row 1: neutral (1), slightly annoyed (2)
- Row 2: annoyed (3), angry (4)
- Row 3: very angry (5), maximum anger (6)
"""

import os
import sys
from PIL import Image


def split_composite_image(input_path, output_dir='images'):
    """
    Split a 2x3 composite image into 6 separate images.

    Args:
        input_path: Path to the composite image
        output_dir: Directory to save the split images (default: 'images')
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Load the composite image
    try:
        img = Image.open(input_path)
        print(f"Loaded composite image: {img.size[0]}x{img.size[1]} pixels")
    except Exception as e:
        print(f"Error loading image: {e}")
        sys.exit(1)

    # Get dimensions
    width, height = img.size

    # Calculate individual image dimensions
    # The composite is 2 columns x 3 rows
    single_width = width // 2
    single_height = height // 3

    print(f"Each individual image will be: {single_width}x{single_height} pixels")

    # Define the grid positions and output filenames
    positions = [
        # (col, row, filename)
        (0, 0, 'trump-1-neutral.jpg'),
        (1, 0, 'trump-2-slightly-annoyed.jpg'),
        (0, 1, 'trump-3-annoyed.jpg'),
        (1, 1, 'trump-4-angry.jpg'),
        (0, 2, 'trump-5-very-angry.jpg'),
        (1, 2, 'trump-6-maximum-anger.jpg'),
    ]

    # Extract and save each image
    for col, row, filename in positions:
        # Calculate crop box (left, upper, right, lower)
        left = col * single_width
        upper = row * single_height
        right = left + single_width
        lower = upper + single_height

        # Crop the image
        cropped = img.crop((left, upper, right, lower))

        # Save the cropped image
        output_path = os.path.join(output_dir, filename)
        cropped.save(output_path, 'JPEG', quality=90)
        print(f"✓ Saved: {output_path}")

    print(f"\nSuccessfully split composite into 6 images in '{output_dir}/' directory")
    print("You can now open index.html in your browser!")


if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python split_composite.py <path-to-composite-image>")
        print("\nExample:")
        print("  python split_composite.py trump-composite.jpg")
        sys.exit(1)

    input_image = sys.argv[1]

    if not os.path.exists(input_image):
        print(f"Error: File '{input_image}' not found")
        sys.exit(1)

    split_composite_image(input_image)
