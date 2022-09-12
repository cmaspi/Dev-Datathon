from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class student(User):
    roll_no = models.CharField(max_length=20, primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
