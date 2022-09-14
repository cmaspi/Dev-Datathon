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
from google.auth.transport import requests
from google.oauth2 import id_token
import requests


# Create your views here.
@api_view(['POST'])
def return_reviews(request):
    email = email_from_token(request.headers.get('Authorization'))
    # email = request.POST.get('email')
    if student.objects.filter(email=email).exists():
        course_ = course.objects.get(id=request.POST.get('id'))
        reviews = course_.course_review_set.all()
        serializer = Review_serializer(reviews, many=True)
        return Response(serializer.data)
    else:
        return Response({1})


@api_view(['POST'])
def create_review(request):
    email = email_from_token(request.headers.get('Authorization'))
    if student.objects.filter(email=email).exists():
        course = course.objects.get(id=request.POST.get('id'))
        text = request.POST.get('review')
        # email = request.POST.get('email')
        st = student.objects.get(email=email)
        new_review = course_review(student=st, course=course, review=text)
        new_review.save()
        return Response({0})
    else:
        return Response({1})


@api_view(['POST'])
def upvote(request):
    review_id = request.POST.get('id')
    # email = email_from_token(request.POST.get('token'))
    email = request.POST.get('email')
    st = student.objects.get(email=email)


@api_view(['POST'])
def return_top_reviews(request):
    course = course.objects.get(id=request.POST.get('id'))
    reviews = course.course_review_set.all()
    serializer = Review_serializer(reviews, many=True)

    sorted(serializer.data, key=lambda k: (k['upvoters_count']), reverse=True)
    i = 0
    concat_review = ''
    while i < 10 and i < len(serializer.data):
        concat_review += (serializer.data[i]['review']+". ")
        i += 1

    return concat_review


@api_view(['POST'])
def script(request):
    course_id = 197
    course_ = course.objects.get(id=course_id)
    reviews = course_.course_review_set.all()
    text = ""
    for i in reviews:
        text += i.review

    headers = {
            "accept": "application/json",
              }
    json_data = {
                    'input': text
                }
    url = 'http://0.0.0.0:1234/summarize/'
    response = requests.post(url, json=json_data, headers=headers).json()
    course_.review = response['summary']
    course_.save()
    grades = course_.grade_set.all()
    sum_, num = 0, 0
    for i in grades:
        sum_ += 10 #i.grade
        num += 1
    course_.median_grade = sum_/num if num != 0 else 0
    course_.save()
    return Response({0})


# if __name__ == '__main__':
#     text = 'This is a piece of text that should be summarized by this app'
#     url = 'http://0.0.0.0:1234/summarize/'
#     print(get_response(url, text))
