from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import student
from django.contrib.auth import login
from rest_framework.response import Response

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
    return token


def check_registration(token):
    email = email_from_token(token)
    return student.objects.filter(email=email).exists()


@api_view(['POST'])
def signup(request):
    email = request.POST.get('email')
    username = request.POST.get('username')
    grade_card = request.POST.get('grade_card')
    user = student(email=email, username=username, grade_card=grade_card)
    user.save()
    populate(grade_card,user)
    return Response({0})
