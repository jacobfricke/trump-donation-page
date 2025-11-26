#!/bin/bash
# Create SVG placeholder images for testing

mkdir -p images

# Define colors for each level
declare -a colors=("#4A90E2" "#7B68EE" "#F5A623" "#F8E71C" "#FF6B6B" "#D0021B")
declare -a labels=("Level 1: Neutral" "Level 2: Slightly Annoyed" "Level 3: Annoyed" "Level 4: Angry" "Level 5: Very Angry" "Level 6: MAXIMUM ANGER")
declare -a files=("trump-1-neutral.svg" "trump-2-slightly-annoyed.svg" "trump-3-annoyed.svg" "trump-4-angry.svg" "trump-5-very-angry.svg" "trump-6-maximum-anger.svg")

echo "Creating SVG placeholder images..."

for i in {0..5}; do
  cat > "images/${files[$i]}" <<EOF
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <rect width="1920" height="1080" fill="${colors[$i]}"/>
  <text x="960" y="500" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="white" text-anchor="middle" stroke="black" stroke-width="2">${labels[$i]}</text>
  <text x="960" y="600" font-family="Arial, sans-serif" font-size="40" fill="rgba(255,255,255,0.8)" text-anchor="middle">PLACEHOLDER - Add real Trump images</text>
</svg>
EOF
  echo "✓ Created ${files[$i]}"
done

echo ""
echo "✓ All SVG placeholder images created!"
echo "Note: Update CSS to use .svg instead of .jpg, or add real images as .jpg files"
