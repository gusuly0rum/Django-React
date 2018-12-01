from music.models import Artist, Song
from .serializers import SongSerializer
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)


class SongListView(ListAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class SongCreateView(CreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class SongUpdateView(UpdateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class SongDeleteView(DestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer