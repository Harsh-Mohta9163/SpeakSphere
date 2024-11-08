# users/urls.py
from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('leaderboard', views.leaderboard, name='leaderboard'),
    path('',home)
]
