from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import student
from rest_framework.response import Response
from google.oauth2 import id_token
from google.auth.transport import requests

import sys
from bs4 import BeautifulSoup
sys.path.append("../")
from course.models import course as c
from grades.models import grade as g

# Create your views here.
def populate(file, st):
    
    with open(f'{file}') as fp:
        soup = BeautifulSoup(fp, 'html.parser')
    
    Courses = soup.find_all('ul', {'class': 'subCnt'})
    Duration = None
    # f = open('sample.txt', 'w')  # to be deleted
    for sem in Courses:
        for course in sem:
            check = course.find('div', {'class': 'col'})
            if check is not None:
                Duration = check.text
            else:
                CourseCode = course.find('span', {'class': 'col1'}).text
                CourseName = course.find('span', {'class': 'col2'}).text
                instructor = course.find('span', {'class': 'col7'}).text
                grade = course.find('span', {'class': 'col8'}).text
                # temporary
                '''
                f.write(f'Course Code: {CourseCode}, Course Name: {CourseName}, ' +
                        f'instructor: {instructor}, grade: {grade}\n')
                '''

                # for course population
                course_=c(name=CourseName,prof=instructor, code=CourseCode, offering=Duration)
                course_.save()

                # for grades population
                grade_=g(student=st, course=course_,grade=grade)
                grade_.save()

    # f.close()


def email_from_token(token):
    idinfo = id_token.verify_oauth2_token(token, requests.Request(), "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com")
    return idinfo['email']


def check_registration(token):
    email = email_from_token(token)
    return student.objects.filter(email=email).exists()


@api_view(['POST'])
def signup(request):
    email = email_from_token(request.POST.get('token'))
    username = request.POST.get('username')
    grade_card = request.POST.get('grade_card')
    user = student(email=email, username=username, grade_card=grade_card)
    user.save()
    populate(grade_card,user)
    return Response({0})
