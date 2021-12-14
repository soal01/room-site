from django.db import models

# Create your models here.

class CleaningMounth(models.Model):
    mounth_name = models.CharField(max_length=12)
    year = models.CharField(max_length=4)
    first_day = models.IntegerField()
    cleaners = models.TextField()

    def __str__(self):
        return f'{self.mounth_name} {self.year}'