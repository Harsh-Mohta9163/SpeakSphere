# users/models.py
from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    # Any other fields related to gamification features
