from django.db import models
from django.contrib.auth.models import AbstractBaseUser


# Create your models here.
class student(AbstractBaseUser):
    email = models.CharField(max_length=40, unique=True)
    username = models.CharField(max_length=20)
    USERNAME_FIELD = 'email'
