import os
from PIL import Image

desktop_dir = r'C:\Users\Анастасия\Desktop\English RPG'
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
            alpha = max(0, int(a * (1 - (g - max(r, b)) / 100.0)))
            new_data.append((r, g, b, alpha))
        else:
            new_data.append((r, g, b, a))

    img.putdata(new_data)
    return img

print("Processing Selene full body image...")
full_body_path = os.path.join(desktop_dir, 'Селена в полный рост.png')
if os.path.exists(full_body_path):
    full_img = remove_green_background(full_body_path)
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

    full_out_root = os.path.join(dest_dir, "selene_hero_standalone.png")
    full_out_img = os.path.join(images_dir, "selene_hero_standalone.png")

    cropped_full.save(full_out_root, "PNG")
    cropped_full.save(full_out_img, "PNG")
    cropped_full.save(os.path.join(artifacts_dir, "selene_hero_standalone.png"), "PNG")
    print("Selene full body processed successfully!")

print("Processing Selene face avatar...")
avatar_path = os.path.join(desktop_dir, 'аватар Селена.png')
if os.path.exists(avatar_path):
    avatar_img = remove_green_background(avatar_path)
    bbox = avatar_img.getbbox()
    if bbox:
        w, h = avatar_img.size
        left = max(0, bbox[0])
        top = max(0, bbox[1])
        right = min(w, bbox[2])
        bottom = min(h, bbox[3])
        cropped_avatar = avatar_img.crop((left, top, right, bottom))
    else:
        cropped_avatar = avatar_img

    avatar_out_root = os.path.join(dest_dir, "selene_face.png")
    avatar_out_img = os.path.join(images_dir, "selene_face.png")

    cropped_avatar.save(avatar_out_root, "PNG")
    cropped_avatar.save(avatar_out_img, "PNG")
    cropped_avatar.save(os.path.join(artifacts_dir, "selene_face.png"), "PNG")
    print("Selene face avatar processed successfully!")
