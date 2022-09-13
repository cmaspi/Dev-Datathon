from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import student
from django.contrib.auth import login
from rest_framework.response import Response


# Create your views here.
def populate(file):
    ...


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
    populate(grade_card)
    return Response({0})
