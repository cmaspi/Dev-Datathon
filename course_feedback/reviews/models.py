import sys
sys.path.append("../")
from django.db import models
from user.models import student as s
from course.models import course as c


# Create your models here.
class review(models.Model):
    student = models.ForeignKey(to=s, on_delete=models.CASCADE)
    course = models.ForeignKey(to=c, on_delete=models.CASCADE)
    review_ = models.TextField(max_length=2000, null=True)
    upvoters = models.ManyToManyField(s, null=True)
    downvoters = models.ManyToManyField(s, null=True)
