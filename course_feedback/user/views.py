from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import student
from rest_framework.response import Response
from google.oauth2 import id_token
from google.auth.transport import requests


# Create your views here.
def populate(file):
    ...


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
    populate(grade_card)
    return Response({0})
