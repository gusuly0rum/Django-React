from music.models import Artist, Song
from rest_framework import serializers


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'