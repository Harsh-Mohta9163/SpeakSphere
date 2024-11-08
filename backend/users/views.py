# users/views.py
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse


def home(request):
    return HttpResponse(request)


