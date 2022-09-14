from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import course_review
from rest_framework.response import Response
import sys
sys.path.append("../")
from course.models import course
from .serializers import Review_serializer
from user.models import student
from user.views import email_from_token


# Create your views here.
@api_view(['POST'])
def return_reviews(request):
    course = course.objects.get(name=request.POST["course_name"],
                                offering=request.POST["course_offering"])
    reviews = course.course_review_set.all()
    serializer = Review_serializer(reviews, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_review(request):
    course = course.objects.get(name=request.POST["course_name"],
                                offering=request.POST["course_offering"])
    text = request.POST.get('review')
    # email = email_from_token(request.POST.get('token'))
    email = request.POST.get('email')
    st = student.objects.get(email=email)
    new_review = course_review(student=st, course=course, review=text)
    new_review.save()


@api_view(['POST'])
def upvote(request):
    review_id = request.POST.get('id')
    # email = email_from_token(request.POST.get('token'))
    email = request.POST.get('email')
    st = student.objects.get(email=email)


@api_view(['POST'])
def return_top_reviews(request):
    course = course.objects.get(name=request.POST["course_name"],
                                offering=request.POST["course_offering"])
    reviews = course.course_review_set.all()
    serializer = Review_serializer(reviews, many=True)

    sorted(serializer.data, key=lambda k: (k['upvoters_count']), reverse=True)
    i = 0
    concat_review = ''
    while i < 10 and i < len(serializer.data):
        concat_review += (serializer.data[i]['review']+". ")
        i += 1

    return concat_review
