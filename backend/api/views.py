# views.py
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import *
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])

def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Ensure both username and password are provided
    if not username or not password:
        return Response({"error": "Username and password are required."}, status=status.HTTP_400_BAD_REQUEST)

    # Check if the username is already taken
    if User.objects.filter(username=username).exists():
        return Response({"error": "Username is already taken."}, status=status.HTTP_400_BAD_REQUEST)

    # Validate password strength
    try:
        validate_password(password)
    except ValidationError as e:
        return Response({"error": e.messages}, status=status.HTTP_400_BAD_REQUEST)

    # Try to create a new user
    try:
        user = User.objects.create_user(username=username, password=password)
        return Response({
            "message": "Registration successful!",
            "user": {
                "id": user.id,
                "username": user.username,
            }
        }, status=status.HTTP_201_CREATED)
    except Exception as e:
        # Handle any unexpected errors
        return Response({"error": "An error occurred while creating the user."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'message': 'Login successful!',
            'username': user.username
        }, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid username or password."}, status=status.HTTP_400_BAD_REQUEST)

# api/views.py


@api_view(['GET'])
def leaderboard(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "User is not authenticated."}, status=status.HTTP_401_UNAUTHORIZED)

    # Get top 5 users by points
    top_users = Profile.objects.order_by('-points')[:5]

    # Handle case where the profile does not exist
    user_profile = Profile.objects.filter(user=request.user).first()
    if not user_profile:
        return JsonResponse({"error": "Profile not found for the user."}, status=status.HTTP_404_NOT_FOUND)

    # Calculate the current user's rank
    all_profiles = Profile.objects.order_by('-points')
    user_rank = list(all_profiles).index(user_profile) + 1

    # Serialize the data for top users
    top_users_data = [
        {"rank": i + 1, "name": user.user.username, "points": user.points}
        for i, user in enumerate(top_users)
    ]

    # Data for the current user's rank
    your_rank_data = {
        "rank": user_rank,
        "name": request.user.username,
        "points": user_profile.points
    }

    return JsonResponse({
        "top_users": top_users_data,
        "your_rank": your_rank_data
    }, status=status.HTTP_200_OK)
