# Generated by Django 3.1.4 on 2021-01-04 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20210104_1402'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='purchase_date',
            field=models.DateField(),
        ),
    ]
