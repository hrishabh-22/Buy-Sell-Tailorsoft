# Generated by Django 3.1.4 on 2021-01-04 08:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='price',
            new_name='buy_price',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='stock',
            new_name='sell_price',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='city',
            new_name='state',
        ),
        migrations.AddField(
            model_name='product',
            name='purchase_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
