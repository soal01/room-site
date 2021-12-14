from django.shortcuts import render
from django.views.generic import ListView

from .serializers import CleaningMounthSerializer
from .models import CleaningMounth
from rest_framework import viewsets
#from .serializers import WikiPostSerializer
# Create your views here.

class CleaningMounthsList(ListView):
    #template_name = 'wiki_posts/postList.html'
    model = CleaningMounth
    context_object_name = 'wiki_posts'

class CleaningMounthsListView(viewsets.ModelViewSet):
    serializer_class = CleaningMounthSerializer
    queryset = CleaningMounth.objects.all()

    def perform_create(self, serializer):
        #serializer.validated_data['user'] = self.request.user
        return super().perform_create(serializer)