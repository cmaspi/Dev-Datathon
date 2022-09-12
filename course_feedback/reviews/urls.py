from django.urls import path
from .views import *


urlpatterns = [
    path('', return_reviews)
]
