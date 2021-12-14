from django.urls import path
from .views import CleaningMounthsList

urlpatterns = [
    path('', CleaningMounthsList.as_view(), name="cleaning_mounths_list")
]