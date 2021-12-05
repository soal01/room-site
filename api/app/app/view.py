from django.contrib.auth.views import LogoutView, LoginView
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer

class Logout(LogoutView):
  next_page = '/'

class Login(LoginView):
  context_object_name = 'form'
  #template_name = 'app/login.html'

  def get_redirect_url(self):
    return '/'

class CurrentUser(APIView):
  def get(self, request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)