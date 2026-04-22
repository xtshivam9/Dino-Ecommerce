from django.db import migrations


def rename_categories(apps, schema_editor):
    Category = apps.get_model('core', 'Category')
    renames = {
        'Category 1': 'Shirts & Blouses',
        'Category 2': 'T-Shirts',
    }
    for old_title, new_title in renames.items():
        Category.objects.filter(title=old_title).update(title=new_title)


def reverse_rename_categories(apps, schema_editor):
    Category = apps.get_model('core', 'Category')
    renames = {
        'Shirts & Blouses': 'Category 1',
        'T-Shirts': 'Category 2',
    }
    for old_title, new_title in renames.items():
        Category.objects.filter(title=old_title).update(title=new_title)


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_alter_billingaddress_id_alter_category_id_and_more'),
    ]

    operations = [
        migrations.RunPython(rename_categories, reverse_rename_categories),
    ]
