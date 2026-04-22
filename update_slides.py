import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'demo.settings')
django.setup()
from core.models import Slide
Slide.objects.filter(id=1).update(image='master-slide-01.jpg', caption1='Women Collection 2026', caption2='New Arrivals')
Slide.objects.filter(id=2).update(image='master-slide-02.jpg', caption1='Men Collection 2026', caption2='New Season')
Slide.objects.filter(id=3).update(image='master-slide-06.jpg', caption1='Accessories Collection', caption2='Exclusive Watches')
