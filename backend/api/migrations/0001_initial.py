from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(first_name="Hrishabh",
                          last_name="Mishra",
                          email="hitesh@lco.dev",
                          city='Lucknow',
                          is_staff=True,
                          is_superuser=True,
                          phone="9161981670",
                          gender="Male"
                          )
        user.set_password("12345")
        user.save()

    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data),
    ]
