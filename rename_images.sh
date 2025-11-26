#!/bin/bash
# Rename cell images to the expected Trump anger filenames

cd images/

echo "Renaming Trump anger images..."

# Check if files exist
if [ ! -f "cell_1_1.png" ]; then
    echo "❌ Error: cell_1_1.png not found in images/ directory"
    echo "Please add all 6 cell_*.png files first"
    exit 1
fi

# Rename with proper mapping
mv cell_1_1.png trump-1-neutral.png
echo "✓ cell_1_1.png → trump-1-neutral.png"

mv cell_1_2.png trump-2-slightly-annoyed.png
echo "✓ cell_1_2.png → trump-2-slightly-annoyed.png"

mv cell_2_1.png trump-3-annoyed.png
echo "✓ cell_2_1.png → trump-3-annoyed.png"

mv cell_2_2.png trump-4-angry.png
echo "✓ cell_2_2.png → trump-4-angry.png"

mv cell_3_1.png trump-5-very-angry.png
echo "✓ cell_3_1.png → trump-5-very-angry.png"

mv cell_3_2.png trump-6-maximum-anger.png
echo "✓ cell_3_2.png → trump-6-maximum-anger.png"

echo ""
echo "✅ All images renamed successfully!"
echo ""
echo "Current images:"
ls -lh *.png

echo ""
echo "Next steps:"
echo "1. Update CSS to use .png instead of .jpg"
echo "2. git add images/"
echo "3. git commit -m 'Add Trump anger images'"
echo "4. git push"
