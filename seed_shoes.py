import os
import django
import shutil

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'demo.settings')
django.setup()

from core.models import Category, Item

def seed_shoes():
    media_root = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'media_root')
    if not os.path.exists(media_root):
        os.makedirs(media_root)
        
    shoe_images = [
        r"C:\Users\xtshi\.gemini\antigravity\brain\c68ccda7-1a64-4ea3-91b4-f72c375e7e4f\shoe_1_1777056885519.png",
        r"C:\Users\xtshi\.gemini\antigravity\brain\c68ccda7-1a64-4ea3-91b4-f72c375e7e4f\shoe_2_1777056904522.png",
        r"C:\Users\xtshi\.gemini\antigravity\brain\c68ccda7-1a64-4ea3-91b4-f72c375e7e4f\shoe_3_1777056919590.png",
        r"C:\Users\xtshi\.gemini\antigravity\brain\c68ccda7-1a64-4ea3-91b4-f72c375e7e4f\shoe_4_1777056934042.png",
    ]
    
    # Check if we need to copy images to media_root and rename them for brevity
    dest_images = []
    for i, img_path in enumerate(shoe_images):
        dest_filename = f"seeded_shoe_{i+1}.png"
        dest_path = os.path.join(media_root, dest_filename)
        shutil.copy(img_path, dest_path)
        dest_images.append(dest_filename)

    # Create category if not exists
    cat, created = Category.objects.get_or_create(
        title='Shoes',
        defaults={
            'slug': 'shoes',
            'description': 'High quality sneakers and shoes.',
            'image': dest_images[0] # Use first shoe image as category image
        }
    )

    items_data = [
        {
            'title': 'Nike Air Jordan 1 Red/Black',
            'price': 180.0,
            'discount_price': 165.0,
            'label': 'N',
            'slug': 'nike-air-jordan-1-red-black',
            'stock_no': 'SH001',
            'description_short': 'Classic Air Jordan 1 in Red and Black',
            'description_long': 'The Air Jordan 1 high-top sneaker with premium materials and classic color blocking.',
            'image': dest_images[0]
        },
        {
            'title': 'Nike Dunk Low Blue/White',
            'price': 110.0,
            'discount_price': 99.0,
            'label': 'P',
            'slug': 'nike-dunk-low-blue-white',
            'stock_no': 'SH002',
            'description_short': 'Classic Nike Dunk Low in University Blue',
            'description_long': 'Retro style Dunk Low sneakers offering versatile styling and comfortable fit.',
            'image': dest_images[1]
        },
        {
            'title': 'Nike Air Force 1 White',
            'price': 115.0,
            'discount_price': None,
            'label': 'N',
            'slug': 'nike-air-force-1-white',
            'stock_no': 'SH003',
            'description_short': 'Iconic all-white Air Force 1s',
            'description_long': 'The classic all-white Nike Air Force 1. A staple in any sneaker collection.',
            'image': dest_images[2]
        },
        {
            'title': 'Nike Air Jordan 1 Yellow/Black',
            'price': 180.0,
            'discount_price': None,
            'label': 'S',
            'slug': 'nike-air-jordan-1-yellow-black',
            'stock_no': 'SH004',
            'description_short': 'Eye-catching Yellow and Black Jordans',
            'description_long': 'Make a statement with these striking yellow and black Air Jordan 1s.',
            'image': dest_images[3]
        }
    ]

    for data in items_data:
        item, created = Item.objects.get_or_create(
            slug=data['slug'],
            defaults={
                'title': data['title'],
                'price': data['price'],
                'discount_price': data['discount_price'],
                'category': cat,
                'label': data['label'],
                'stock_no': data['stock_no'],
                'description_short': data['description_short'],
                'description_long': data['description_long'],
                'image': data['image']
            }
        )
        if created:
            print(f"Created: {item.title}")
        else:
            print(f"Already exists: {item.title}")

if __name__ == '__main__':
    seed_shoes()
