import os
from PIL import Image

full_body_path = r'C:\Users\Анастасия\Desktop\English RPG\Gemini_Generated_Image_wcl9y1wcl9y1wcl9.png'
avatar_path = r'C:\Users\Анастасия\Desktop\English RPG\Gemini_Generated_Image_wcl9y1wcl9y1wcl9 - Copy.png'

dest_dir = r'c:\dev\english_app'
artifacts_dir = r'C:\Users\Анастасия\.gemini\antigravity\brain\7b1a4d70-c790-4356-a1a7-fd1074a67ecc'

def remove_green_background(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item
        # Chroma key condition for bright green:
        # Green is dominant and significantly brighter than Red and Blue
        if g > 130 and g > r + 35 and g > b + 35:
            new_data.append((0, 0, 0, 0)) # Fully transparent
        elif g > 100 and g > r + 20 and g > b + 20:
            # Soft edge alpha falloff for anti-aliasing
            alpha = max(0, int(a * (1 - (g - max(r, b)) / 100.0)))
            new_data.append((r, g, b, alpha))
        else:
            new_data.append((r, g, b, a))

    img.putdata(new_data)
    return img

print("Processing full body Zephyr image...")
full_img = remove_green_background(full_body_path)

# Crop bounding box of character
bbox = full_img.getbbox()
if bbox:
    # Add a small padding around the character
    pad = 10
    w, h = full_img.size
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad)
    bottom = min(h, bbox[3] + pad)
    cropped_full = full_img.crop((left, top, right, bottom))
else:
    cropped_full = full_img

print("Processing avatar Zephyr image...")
avatar_img = remove_green_background(avatar_path)
avatar_bbox = avatar_img.getbbox()
if avatar_bbox:
    avatar_cropped = avatar_img.crop(avatar_bbox)
else:
    avatar_cropped = avatar_img

# Save outputs to workspace
full_out_path = os.path.join(dest_dir, "zephyr_hero_standalone.png")
avatar_out_path = os.path.join(dest_dir, "zephyr_face.png")

cropped_full.save(full_out_path, "PNG")
avatar_cropped.save(avatar_out_path, "PNG")

# Save outputs to artifacts directory for preview
cropped_full.save(os.path.join(artifacts_dir, "zephyr_hero_standalone.png"), "PNG")
avatar_cropped.save(os.path.join(artifacts_dir, "zephyr_face.png"), "PNG")

print("Zephyr images processed successfully!")
print(f"Full body: {full_out_path}")
print(f"Avatar: {avatar_out_path}")
