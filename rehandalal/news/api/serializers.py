from rest_framework import serializers

from rehandalal.news.models import Story


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = (
            'id',
            'created',
            'slug',
            'title',
            'content',
        )
