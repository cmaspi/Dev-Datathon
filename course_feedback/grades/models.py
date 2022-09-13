import sys
sys.path.append("../")
from django.db import models
from user.models import student as s
from course.models import course as c


# Create your models here.
class grade(models.Model):
    student = models.ForeignKey(to=s, on_delete=models.CASCADE)
    course = models.ForeignKey(to=c, on_delete=models.CASCADE)
    grade = models.IntegerField(null=True)
