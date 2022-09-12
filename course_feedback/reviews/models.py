import sys
sys.path.append("../")
from django.db import models
from user.models import student as s
from course.models import course as c


# Create your models here.
class course_review(models.Model):
    student = models.ForeignKey(to=s, on_delete=models.CASCADE)
    course = models.ForeignKey(to=c, on_delete=models.CASCADE)
    review = models.TextField(max_length=2000, null=True)
    upvoters = models.ManyToManyField(s, related_name='+')
    downvoters = models.ManyToManyField(s, related_name='+')
