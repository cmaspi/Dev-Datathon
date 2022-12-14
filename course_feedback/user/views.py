import json
from grades.models import grade as g
from course.models import course as c
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import student
from rest_framework.response import Response
from google.oauth2 import id_token
from google.auth.transport import requests
import json
from .forms import new_form

import sys
from bs4 import BeautifulSoup

sys.path.append("../")


# Create your views here.
def populate(file, st):
    soup = BeautifulSoup(file.open(), 'html.parser')
    Courses = soup.find_all('ul', {'class': 'subCnt'})
    Duration = None
    # f = open('sample.txt', 'w')  # to be deleted
    for sem in Courses:
        for course in sem:
            check = course.find('div', {'class': 'col'})
            if check is not None:
                Duration = check.text
            else:
                CourseCode = course.find(
                    'span', {'class': 'col1'}).text.strip()
                CourseName = course.find(
                    'span', {'class': 'col2'}).text.strip()
                instructor = course.find(
                    'span', {'class': 'col7'}).text.strip()
                grade = course.find('span', {'class': 'col8'}).text.strip()
                # temporary
                '''
                f.write(f'Course Code: {CourseCode}, Course Name: {CourseName}, ' +
                        f'instructor: {instructor}, grade: {grade}\n')
                '''

                # for course population
                if not c.objects.filter(code=CourseCode, offering=Duration).exists():
                    course_ = c(name=CourseName, prof=instructor,
                                code=CourseCode, offering=Duration)
                    course_.save()
                else:
                    course_ = c.objects.get(code=CourseCode, offering=Duration)

                # for grades population
                dic = {"A+": 10, "A": 10, "A-": 9, "B": 8,
                       "B-": 7, "C": 6, "C-": 5, "D": 4, "FR": 0}
                if grade in dic:
                    grade = dic[grade]
                    grade_ = g(student=st, course=course_, grade=grade)
                    grade_.save()

    # f.close()


def email_from_token(token):
    idinfo = id_token.verify_oauth2_token(token, requests.Request(),
                                          "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com")
    return idinfo['email']


def check_registration(token):
    email = email_from_token(token)
    return student.objects.filter(email=email).exists()


@api_view(['POST'])
def signup(request):
    # try:
    email = email_from_token(request.headers.get('Authorization'))
    # email = request.POST.get('email')
    # request_body = json.loads(request.body.decode('utf-8'))
    # grade_card = request_body['grade_card']
    print(request)
    # form = new_form(request.FILES)
    # if form.is_valid():
    #     print("boogy")
    # else:
    #     print("woogy")
    # grade_card = form['file']
    # print(request.FILES)
    grade_card = request.FILES['grade_card']
    print(grade_card)
    # request_data = json.loads(request.body.decode('utf-8'))
    # print(request_data)
    # print(request.data['file'])
    # print("hahaha", request.data)
    # grade_card = request.FILES['grade_card']
    user = student(email=email, grade_card=grade_card)
    user.save()
    populate(grade_card, user)
    return Response({0})
    # except:
    #     return Response({1})


@api_view(['POST'])
def check_user(request):
    # print(request.headers)
    email = email_from_token(request.headers.get('Authorization'))
    return Response({student.objects.filter(email=email).exists()})
