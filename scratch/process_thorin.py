import os
from PIL import Image

full_body_path = r'C:\Users\Анастасия\Desktop\English RPG\Gemini_Generated_Image_enl8j3enl8j3enl8.png'

dest_dir = r'c:\dev\english_app'
images_dir = r'c:\dev\english_app\images'
artifacts_dir = r'C:\Users\Анастасия\.gemini\antigravity\brain\7b1a4d70-c790-4356-a1a7-fd1074a67ecc'

def remove_green_background(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item
        # Chroma key condition for bright green:
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

print("Processing clean full body Thorin image (no ground shadow)...")
full_img = remove_green_background(full_body_path)

# Crop bounding box of character
bbox = full_img.getbbox()
if bbox:
    pad = 10
    w, h = full_img.size
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(w, bbox[2] + pad)
    bottom = min(h, bbox[3] + pad)
    cropped_full = full_img.crop((left, top, right, bottom))
else:
    cropped_full = full_img

# Save outputs to workspace root and images/ directory
full_out_root = os.path.join(dest_dir, "thorin_hero_standalone.png")
full_out_img = os.path.join(images_dir, "thorin_hero_standalone.png")

cropped_full.save(full_out_root, "PNG")
cropped_full.save(full_out_img, "PNG")

# Save outputs to artifacts directory for preview
cropped_full.save(os.path.join(artifacts_dir, "thorin_hero_standalone.png"), "PNG")

print("Clean Thorin standalone image processed successfully!")
print(f"Full body: {full_out_img}")
