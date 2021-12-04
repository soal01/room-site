from django.urls import path
from .views import index, WikiPostList

urlpatterns = [
    path('react', index),
    path('', WikiPostList.as_view(), name="wiki_post_list")
]