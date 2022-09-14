from rest_framework import serializers
from .models import course


class course_serializer(serializers.ModelSerializer):
    class Meta:
        model = course
        fields = ['id', 'code', 'offering', 'name']


class summary_grade_serializer(serializers.ModelSerializer):
    class Meta:
        model = course
        fields = ['review', 'median_grade']
