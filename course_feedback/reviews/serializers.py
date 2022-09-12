from rest_framework import serializers
from .models import course_review


class Review_serializer(serializers.ModelSerializer):

    class Meta:
        model = course_review
        fields = '__all__'
