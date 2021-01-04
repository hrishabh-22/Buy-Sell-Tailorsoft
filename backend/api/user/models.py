from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=100, default='Anonymous')
    last_name = models.CharField(max_length=100, default='Anonymous')

    email = models.EmailField(max_length=254, unique=True)

    username = None

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['state','phone']

    phone = models.CharField(max_length=12, blank=True, null=True)

    state = models.CharField(max_length=50)

    session_token = models.CharField(max_length=10, default=0)

    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
