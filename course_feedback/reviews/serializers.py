from rest_framework import serializers
from .models import course_review


class Review_serializer(serializers.ModelSerializer):
    upvoters_count = serializers.SerializerMethodField()
    downvoters_count = serializers.SerializerMethodField()

    class Meta:
        model = course_review
        fields = ['id', 'student', 'course', 'review', 'upvoters_count', 'downvoters_count']

    def get_upvoters_count(self, obj):
        return obj.upvoters.count()

    def get_downvoters_count(self, obj):
        return obj.downvoters.count()
