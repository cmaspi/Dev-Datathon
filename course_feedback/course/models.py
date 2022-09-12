from django.db import models


# Create your models here.
class course(models.Model):
    name = models.TextField(max_length=100)
    prof = models.TextField(max_length=50, null=True)
    code = models.CharField(max_length=6)
    offering = models.CharField(max_length=20)
    review = models.TextField(max_length=300, null=True)
    median_grade = models.FloatField(null=True)
    variance = models.FloatField(null=True)
    workload = models.FloatField(null=True)
    teaching = models.FloatField(null=True)

    class Meta:
        unique_together = (('code', 'offering'),)
