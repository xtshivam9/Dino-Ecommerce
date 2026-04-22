import os, django, sys
sys.path.append('x:/dj-ecommerce')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'demo.settings')
django.setup()
from core.models import Slide
Slide.objects.filter(id=1).update(image='fashion_banner_1.jpg')
Slide.objects.filter(id=2).update(image='fashion_banner_2.jpg')
Slide.objects.filter(id=3).update(image='fashion_banner_3.jpg')
