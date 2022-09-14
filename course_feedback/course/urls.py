from django.urls import path
from .views import *


urlpatterns = [
    path('', all_courses),
    path('summary/', stuff)
]
