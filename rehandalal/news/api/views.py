from rest_framework import viewsets

from rehandalal.news.api.serializers import StorySerializer
from rehandalal.news.models import Story


class StoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Story.objects.all()
    serializer_class = StorySerializer
