# users/views.py
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Profile
from django.http import HttpResponse


def home(request):
    return HttpResponse(request)

@api_view(['GET'])
def leaderboard(request):
    top_users = Profile.objects.order_by('-points')[:5]  # Get top 5 users by points
    user_profile = Profile.objects.get(user=request.user)

    # Calculate the current user's rank
    all_profiles = Profile.objects.order_by('-points')
    user_rank = list(all_profiles).index(user_profile) + 1

    # Serialize the data
    top_users_data = [
        {"rank": i + 1, "name": user.user.username, "points": user.points}
        for i, user in enumerate(top_users)
    ]
    your_rank_data = {
        "rank": user_rank,
        "name": request.user.username,
        "points": user_profile.points
    }

    return JsonResponse({
        "top_users": top_users_data,
        "your_rank": your_rank_data
    }, status=status.HTTP_200_OK)
