from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import course_review
from rest_framework.response import Response
import sys
sys.path.append("../")
from course.models import course
from .serializers import Review_serializer


# Create your views here.
@api_view(['POST'])
def return_reviews(request):
    course = course.objects.get(name=request.POST["course_name"], offering=request.POST["course_offering"])
    reviews = course.course_review_set.all()
    serializer = Review_serializer(reviews, many=True)
    return Response(serializer.data)

