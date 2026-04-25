import os
import django
import shutil

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'demo.settings')
django.setup()

from core.models import Category, Item

def seed_casual():
    media_root = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'media_root')
    if not os.path.exists(media_root):
        os.makedirs(media_root)
        
    casual_images = [
        r"C:\Users\xtshi\.gemini\antigravity\brain\c68ccda7-1a64-4ea3-91b4-f72c375e7e4f\casual_shirt_1777057249200.png",
        r"C:\Users\xtshi\.gemini\antigravity\brain\c68ccda7-1a64-4ea3-91b4-f72c375e7e4f\casual_tshirt_1777057262746.png",
        r"C:\Users\xtshi\.gemini\antigravity\brain\c68ccda7-1a64-4ea3-91b4-f72c375e7e4f\casual_hoodie_1777057279760.png",
        r"C:\Users\xtshi\.gemini\antigravity\brain\c68ccda7-1a64-4ea3-91b4-f72c375e7e4f\casual_jeans_1777057294754.png",
    ]
    
    dest_images = []
    for i, img_path in enumerate(casual_images):
        dest_filename = f"seeded_casual_{i+1}.png"
        dest_path = os.path.join(media_root, dest_filename)
        shutil.copy(img_path, dest_path)
        dest_images.append(dest_filename)

    # Create category if not exists
    cat, created = Category.objects.get_or_create(
        title='Casual Wear',
        defaults={
            'slug': 'casual-wear',
            'description': 'Comfortable and stylish casual wear.',
            'image': dest_images[0]
        }
    )

    items_data = [
        {
            'title': 'Classic Button-Down Shirt',
            'price': 45.0,
            'discount_price': 35.0,
            'label': 'N',
            'slug': 'classic-button-down-shirt',
            'stock_no': 'CW001',
            'description_short': 'A classic men\'s casual button-down shirt',
            'description_long': 'Perfect for any casual occasion, this classic button-down shirt offers both comfort and style.',
            'image': dest_images[0]
        },
        {
            'title': 'Trendy Graphic T-Shirt',
            'price': 25.0,
            'discount_price': None,
            'label': 'P',
            'slug': 'trendy-graphic-tshirt',
            'stock_no': 'CW002',
            'description_short': 'White graphic t-shirt with modern design',
            'description_long': 'Stay trendy with this high-quality cotton graphic t-shirt. Ideal for daily wear.',
            'image': dest_images[1]
        },
        {
            'title': 'Premium Grey Hoodie',
            'price': 60.0,
            'discount_price': 50.0,
            'label': 'N',
            'slug': 'premium-grey-hoodie',
            'stock_no': 'CW003',
            'description_short': 'Cozy and stylish grey hoodie',
            'description_long': 'Keep warm and stylish with this premium grey hoodie. Features a soft interior and adjustable drawstring.',
            'image': dest_images[2]
        },
        {
            'title': 'Classic Denim Jeans',
            'price': 70.0,
            'discount_price': None,
            'label': 'S',
            'slug': 'classic-denim-jeans',
            'stock_no': 'CW004',
            'description_short': 'Stylish blue denim jeans',
            'description_long': 'A staple in any wardrobe, these classic blue denim jeans provide a perfect fit and durability.',
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
    seed_casual()
