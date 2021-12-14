"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from wiki_posts.views import WikiPostListView
from cleaning_mounths.views import CleaningMounthsList, CleaningMounthsListView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .view import Login, Logout, CurrentUser

router = routers.DefaultRouter()
router.register('wiki_posts', WikiPostListView)
router.register('cleaning_mounths', CleaningMounthsListView)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('logout/', Logout.as_view(), name='logout'),
    path('login/', Login.as_view(), name='login'),
    path('wiki_posts/', include('wiki_posts.urls'), name="wiki_posts"),
    path('cleaning_mounths/', include('cleaning_mounths.urls'), name="cleaning_mounths"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
    path('api/user/current', CurrentUser.as_view(), name='current_user'),
]
