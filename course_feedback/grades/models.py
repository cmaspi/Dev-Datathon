import sys
sys.path.append("../")
from django.db import models
from user.models import student as s
from course.models import course as c


# Create your models here.
class grade(models.Model):
    student = models.ForeignKey(to=s, on_delete=models.CASCADE)
    course = models.ForeignKey(to=c, on_delete=models.CASCADE)
    grades = [(3, "FR"), (4, "D"), (5, "C-"), (6, "C"), (7, "B-"), (8, "B"), (9, "A-"), (10, "A")]
    grade = models.IntegerField(choices=grades, null=True)
