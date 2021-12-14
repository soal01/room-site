from rest_framework import serializers
from .models import CleaningMounth


class CleaningMounthSerializer(serializers.ModelSerializer):
    class Meta:
        model = CleaningMounth
        fields = ['id', 'mounth_name', 'year', 'first_day', 'cleaners']