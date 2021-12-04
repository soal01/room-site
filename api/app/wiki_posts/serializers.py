from rest_framework import serializers
from .models import WikiPost


class WikiPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = WikiPost
        fields = ['id', 'title', 'description']