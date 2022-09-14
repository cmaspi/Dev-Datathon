from rest_framework.decorators import api_view
from .models import course
from .serializers import course_serializer, summary_grade_serializer
from rest_framework.response import Response
from google.oauth2 import id_token
from google.auth.transport import requests
import sys
sys.path.append('../')
from user.models import student as s


# Create your views here.
@api_view(['POST'])
def all_courses(request):
    email = email_from_token(request.headers.get('Authorization'))
    # email = request.POST.get('email')
    if s.objects.filter(email=email).exists():
        tmp = course.objects.all()
        serializer = course_serializer(tmp, many=True)
        return Response(serializer.data)
    else:
        return Response({1})


@api_view(['POST'])
def stuff(request):
    email = email_from_token(request.headers.get('Authorization'))
    # email = request.POST.get('email')
    if s.objects.filter(email=email).exists():
        tmp = course.objects.get(id=request.POST.get('id'))
        serializer = summary_grade_serializer(tmp)
        return Response(serializer.data)
    else:
        return Response({1})


def email_from_token(token):
    idinfo = id_token.verify_oauth2_token(token, requests.Request(),
                                          "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com")
    return idinfo['email']
