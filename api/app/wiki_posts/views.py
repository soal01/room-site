from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import ListView

from .serializers import WikiPostSerializer
from .models import WikiPost
from rest_framework import serializers, viewsets

def index(request):
    print('hello', request)
    return HttpResponse('Привет мир!')



class WikiPostList(ListView):
    #template_name = 'wiki_posts/postList.html'
    model = WikiPost
    context_object_name = 'wiki_posts'


class WikiPostListView(viewsets.ModelViewSet):
    serializer_class = WikiPostSerializer
    queryset = WikiPost.objects.all()

    def perform_create(self, serializer):
        serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)