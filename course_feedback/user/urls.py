from django.urls import path
from .views import *


urlpatterns = [
    path('signup/', signup),
    path('check/', check_user),
]
