from django.db import migrations


# Maps any previously-set placeholder or interim title → correct fashion name.
# Handles cases where 0009 ran with old interim names OR was never applied.
RENAME_MAP = {
    'Category 1':        'Shirts & Blouses',
    'Category 2':        'T-Shirts',
    "Men's Collection":  'Shirts & Blouses',
    "Women's Collection": 'T-Shirts',
}

REVERSE_MAP = {v: k for k, v in [
    ('Category 1', 'Shirts & Blouses'),
    ('Category 2', 'T-Shirts'),
]}


def rename_to_fashion(apps, schema_editor):
    Category = apps.get_model('core', 'Category')
    for old_title, new_title in RENAME_MAP.items():
        Category.objects.filter(title=old_title).update(title=new_title)


def reverse_to_placeholder(apps, schema_editor):
    Category = apps.get_model('core', 'Category')
    for old_title, new_title in REVERSE_MAP.items():
        Category.objects.filter(title=old_title).update(title=new_title)


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_rename_categories'),
    ]

    operations = [
        migrations.RunPython(rename_to_fashion, reverse_to_placeholder),
    ]
