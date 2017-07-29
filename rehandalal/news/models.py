from django.db import models
from django.utils import timezone


class Story(models.Model):
    created = models.DateTimeField(default=timezone.now)
    slug = models.CharField(max_length=64, unique=True)
    title = models.CharField(max_length=255)
    content = models.TextField()
