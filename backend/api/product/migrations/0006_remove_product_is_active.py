# Generated by Django 3.1.4 on 2021-01-04 08:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_product_purchase_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='is_active',
        ),
    ]
