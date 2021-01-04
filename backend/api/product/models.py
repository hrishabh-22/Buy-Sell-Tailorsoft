from django.db import models

# Create your models here.


class Product(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()

    buy_price = models.IntegerField()
    sell_price = models.IntegerField()

    state = models.CharField(max_length=100)

    image = models.ImageField(upload_to='images/', blank=True, null=True)
    purchase_date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
